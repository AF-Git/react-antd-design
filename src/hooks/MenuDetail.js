import React, { useEffect, useContext } from 'react';
import { Button, Radio, Input } from 'antd';
import MenuInfoContext from './MenuInfoContext';

export default function MenuDetail(props) {

  const data = useContext(MenuInfoContext);
  const sonMenu = data.menuInfo;
  useEffect(() => {
    console.log(data)
  }, []);
  
  return (
    <React.Fragment>
        <div className="cusHeader">
            <Button type="link" >删除子菜单</Button>
        </div>
        <div style={{marginBottom:20}}>
            <label>子菜单名称：</label>
            <Input style={{width:360}} value={sonMenu.menuName} placeholder="请输入内容" /><br />
            <label>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <span style={{display:'inline-block',fontSize:16,color: "rgb(154, 141, 141)",marginTop:15}}>字数不超过8个汉字或16个字符</span>
            </label>
        </div>
        {
          sonMenu.menuType!=2?(
            <div style={{marginBottom:20}}>
                <label>子菜单内容：</label>
                <Radio.Group value={sonMenu.menuType || 0} >
                    <Radio value={0}>发送消息</Radio>
                    <Radio value={1}>跳转网页</Radio>
                </Radio.Group>
            </div>
          ):''
        }
    </React.Fragment>
  );
}