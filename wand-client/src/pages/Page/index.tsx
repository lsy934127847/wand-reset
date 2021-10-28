import React, { useState, useRef } from 'react';
import { useModel } from 'umi';

const Module: React.FC = () => {
  const {   moduleList,  moduleGetList } = useModel('module');


  return (
    <div>
      <div>我是新增的页面{moduleList}</div>
      <button
        onClick={() => {
          moduleGetList();
        }}
      >
        点击加1
      </button>
    </div>
  );
};

export default Module;
