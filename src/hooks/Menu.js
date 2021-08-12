import React, { useState, useEffect, useContext, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import SubMenu from './SubMenu'
import MenuInfoContext from './MenuInfoContext';

export default function Menu(props) {

	const childRef = useRef();
  const [list, setList] = useState([]);
  const [parentIndex, setParentIndex] = useState(0);
  const menuInfoContext = useContext(MenuInfoContext);

  useEffect(() => {
    
    setList(props.list);
    
  }, [props.parentIndex,props.list]);
  
  function clickItem(item,index) {
    setParentIndex(index);
    childRef.current.setSonIndex(-1);
    menuInfoContext.dispatch({type:'update',menuInfo:item});
  }
  
  function addMenu() {
    let result = JSON.parse(JSON.stringify(list))
    result.push({
      menuName: "菜单",
      parId: 0,
      menuId: -1,
      nodes: []
    });
    setList(result);
  }

  return (
    <div className="textBot">
      {
        list.map((item,index) => (
          <div 
            className={parentIndex==index?"textItem active":"textItem"} 
            key={index}
            onClick={() => clickItem(item,index)}
          >
            {item.menuName}
            {
              parentIndex==index?(
                <SubMenu 
                  childRef={childRef}
                  item={item}
                  nodes={item.nodes}
                />
              ):''
            }
          </div>
        ))
      }
      {
        list.length<3?(
          <div className="textItem" onClick={addMenu} >
            <PlusOutlined />
          </div>
        ):''
      }
    </div>
  );
}