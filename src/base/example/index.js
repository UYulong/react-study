import React, { createContext, createRef } from "react";

import "./index.css";

const { Provider, Consumer } = createContext();

// 顶部标题
function Title() {
  return <h1 className="title">todos</h1>;
}

// 输入框
class TodoInput extends React.Component {
  state = {
    name: "",
  };

  // 如果用户点击的enter键且不为空，通知父级组件添加
  handleAdd = (e) => {
    if (e.keyCode === 13) {
      if (e.target.value.trim() !== "") {
        this.props.addItem(this.state.name); // 传值
        this.setState({
          name: "", // 清空输入框值
        });
      }
    }
  };

  // 监听输入框的值发生改变行为
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div className="todo-input">
        <input
          value={name}
          onChange={this.handleChange}
          onKeyUp={this.handleAdd}
        />
      </div>
    );
  }
}

// 列表集合
function Items({ list }) {
  return (
    <ul className="items">
      {list.map((item) => (
        <TodoItem key={item.id} id={item.id} isDone={item.isDone}>
          {item.name}
        </TodoItem>
      ))}
    </ul>
  );
}

// 列表中的每一项
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false, // 是否进行双击了
      text: this.props.children, // 默认显示的值
      cacheText: this.props.children, // 缓存一份值
      tmpText: "", // 暂存区-防止用户突然退出编辑
    };
    this.inputRef = createRef();
    this.checkedRef = createRef();
  }

  // 修改 isEdit 状态
  handleModifyEditStatus = () => {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  };

  // 双击选项，进入编辑状态, 先清空上一次的id存储情况
  handleDbClick = () => {
    this.handleModifyEditStatus();
  };

  // 当在编辑状态中编辑时
  handleEditChange = (e) => {
    this.setState({
      text: e.target.value.trim(),
    });
  };

  /* 当用户确认编辑时- 
    1. 如果是 enter 键，则将恢复原始状态
    2. 如果是 esc 键，则退出编辑状态,并将值还原为默认值
  */
  handleEditConfirm = (e) => {
    if (e.keyCode === 13) {
      this.handleModifyEditStatus();
    } else if (e.keyCode === 27) {
      this.handleEditCancel();
      this.handleModifyEditStatus();
    }
  };

  // 当突然退出编辑时，还原编辑之前的值
  handleEditCancel = () => {
    this.setState({
      text: this.state.cacheText,
    });
  };

  // 输入框失焦事件
  handleInputBlurEvetn = () => {
    this.handleModifyEditStatus();
  };

  // 点击每一项前面的复选框时, 派发事件到父组件，修改isDown
  handelChecked = (fn, id) => {
    fn(id);
  };

  // input组件出现时，自动获取焦点
  componentDidUpdate() {
    const node = this.inputRef.current;
    if (node !== null) {
      node.focus();
    }
  }

  render() {
    const { id, isDone } = this.props;
    const { isEdit, text } = this.state;
    return (
      <Consumer>
        {(value) => (
          <li className="todo-item" onDoubleClick={() => this.handleDbClick()}>
            <p className="todo-check">
              <input
                className="show-input"
                type="checkbox"
                onClick={() => this.handelChecked(value.mdy, id)}
                ref={this.checkedRef}
                defaultChecked={isDone ? true : false}
              />
            </p>
            <p className="todo-name">
              <Consumer>
                {(value) =>
                  isEdit ? (
                    <input
                      value={text}
                      onChange={this.handleEditChange}
                      onKeyUp={(e) => this.handleEditConfirm(e, id)}
                      onBlur={this.handleInputBlurEvetn}
                      ref={this.inputRef}
                    />
                  ) : (
                    <span className={isDone ? "active" : ""}>{text}</span>
                  )
                }
              </Consumer>
            </p>
            <p className="todo-delete">
              <Consumer>
                {(value) => <span onClick={() => value.del(id)}>x</span>}
              </Consumer>
            </p>
          </li>
        )}
      </Consumer>
    );
  }
}

// 底部统计
class Footer extends React.Component {
  state = {
    isActiveBtn: "All",
  };

  // 点击 筛选状态
  handleClickStatus = (e) => {
    const text = e.target.innerText;
    if (["All", "Active", "Completed"].includes(text)) {
      this.setState({
        isActiveBtn: text,
      });

      // 通知 根组件 显示对应状态的数据
      this.props.handleChangeList(text);
    }
  };

  // 点击 清除已完成
  handleClearCompleted = () => {
    // 通知 根组件 显示对应状态的数据
    this.props.handleChangeList("completed");
  };

  render() {
    const { isActiveBtn } = this.state;
    const { list } = this.props;

    const itemsLeft = list.filter((item) => item.isDone === true); // 已完成

    return (
      <div className="footer">
        <p> {itemsLeft.length} items left</p>
        <p className="todo-status" onClick={this.handleClickStatus}>
          <span className={isActiveBtn === "All" ? "active" : null}>All</span>
          <span className={isActiveBtn === "Active" ? "active" : null}>
            Active
          </span>
          <span className={isActiveBtn === "Completed" ? "active" : null}>
            Completed
          </span>
        </p>

        {itemsLeft.length > 0 ? (
          <p className="todo-completed" onClick={this.handleClearCompleted}>
            Clear completed
          </p>
        ) : (
          <p className="todo-completed">Please Checked</p>
        )}
      </div>
    );
  }
}

const list = [
  { id: 0, name: "React", isDone: false },
  { id: 1, name: "Vue", isDone: false },
  { id: 2, name: "Anglur", isDone: false },
  { id: 3, name: "PReact", isDone: false },
];

// 展示
class TodoList extends React.Component {
  constructor() {
    super();
    localStorage.setItem("items", JSON.stringify(list));
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({
      list: JSON.parse(localStorage.getItem("items")) || [],
    });
  }

  // 新增事件
  addItem = (name) => {
    const item = {
      id: this.state.list.length,
      name: name,
      isDone: false,
    };
    this.setState({
      list: [...this.state.list, item],
    });

    // 浏览器也存一份
    localStorage.setItem("items", JSON.stringify(this.state.list));
  };

  // 移除事件
  handleDeletItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });

    // 浏览器也存一份
    localStorage.setItem("items", JSON.stringify(this.state.list));
  };

  // 修改数据完成状态事件
  modifyItemStatus = (id) => {
    const tmpArr = this.state.list;
    tmpArr.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });

    this.setState({
      list: tmpArr,
    });

    // 浏览器也存一份
    localStorage.setItem("items", JSON.stringify(this.state.list));
  };

  // 根据 底部状态栏切换，展示不同状态的列表
  handleChangeList = (status) => {
    const cacheList = JSON.parse(localStorage.getItem("items")) || [];
    console.log(cacheList);

    if (cacheList.length === 0) return; // 如果为空...

    if (status === "All") {
      this.setState({
        list: cacheList,
      });
    } else if (status === "Active") {
      const tmpArr = cacheList.filter((item) => item.isDone);

      this.setState({
        list: tmpArr,
      });
    } else if (status === "Completed") {
      const tmpArr = cacheList.filter((item) => !item.isDone);

      this.setState({
        list: tmpArr,
      });
    } else if (status === "completed") {
      const tmpArr = cacheList.filter((item) => !item.isDone);

      this.setState({
        list: tmpArr,
      });

      // 浏览器也存一份
      localStorage.setItem("items", JSON.stringify(tmpArr));
    }
  };

  render() {
    const { list } = this.state;
    return (
      <Provider
        value={{ del: this.handleDeletItem, mdy: this.modifyItemStatus }}
      >
        <div className="todo-example">
          <Title />
          <TodoInput addItem={this.addItem} />
          <Items list={list} />
          {list.length > 0 ? (
            <Footer list={list} handleChangeList={this.handleChangeList} />
          ) : null}
        </div>
      </Provider>
    );
  }
}

export default TodoList;
