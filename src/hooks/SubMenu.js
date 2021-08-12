import React, { useState, useEffect, useContext, useImperativeHandle } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import MenuInfoContext from './MenuInfoContext';

export default function SubMenu(props) {
  
  const { childRef } = props;
  const [item, setItem] = useState({});
  const [nodes, setNodes] = useState([]);
  const [sonIndex, setSonIndex] = useState([-1]);
  const menuInfoContext = useContext(MenuInfoContext);

  useImperativeHandle(childRef, () => ({
    setSonIndex: (n) => setSonIndex(n)
  }));

  useEffect(() => {
    setItem(props.item);
    setNodes(props.nodes);
    
  }, [props.nodes.length]);

  function addSon() {
    
    let result = JSON.parse(JSON.stringify(nodes))
    result.push({
        menuName: item.menuName + "子菜单",
        parId: item.menuId,
        menuId: -1,
        materiaType: 1,
    });
    nodes.push({
      menuName: item.menuName + "子菜单",
      parId: item.menuId,
      menuId: -1,
      materiaType: 1,
    });
    setNodes(result);
  }

  function getSon(item,idx,e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setSonIndex(idx)
    menuInfoContext.dispatch({type:'update',menuInfo:item});
  }

  return (
    <React.Fragment>
      <div className="arrow"></div>
      {
        nodes.length<5?(
            <div className="sonAdd" onClick={addSon}>
                <PlusOutlined />
            </div>
        ):''
      }
      {
        nodes&&nodes.length?(
            <div 
              className={nodes.length==5?"sonBox active":"sonBox"} 
            >
              {
                nodes.map((sonItem,idx)=>{
                  return(
                    <div
                      className={sonIndex==idx?"sonItem active":"sonItem"} 
                      key={idx}
                      onClick={(e) => getSon(sonItem,idx,e)}
                    >{sonItem.menuName}
                    </div>
                  )
                })
              }
            </div>
        ):''
      }
    </React.Fragment>
  );
}
