import { useState, useCallback } from 'react';

export default () => {
  const [moduleList, setModuleList] = useState([]);          // 某个条件下分页数据

 // const [moduleAllList, setModuleAllList] = useState([]);  // 某个条件下全部数据

  //const [moduleOne, setModuleOne] = useState([]);          // 某个条件 下单条数据
  const moduleGetList = useCallback(() => {             // dispatchCounterAdd指向的引用地址永远不会变
    setModuleList([])
  }, []);

 
  return { 
    moduleList, 
    moduleGetList

  };
};
