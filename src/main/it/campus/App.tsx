import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewDepartment from './view/department/index.tsx';
// import Engineering from '@/main/it/campus/view/department/engineering/index.tsx';
import ViewEngineering from './view/department/engineering/index.tsx';
import ViewGeodeticEngineering from './view/department/engineering/ViewGeodeticEngineering.tsx';
import ViewComputerEngineering from './view/department/engineering/ViewComputerEngineering.tsx';
import LayoutI  from './layout/layout-i.tsx';
import ViewHome from './view/index.tsx';

import { it$campus$model$heading as $heading} from './model/heading/package-info.mts';

const App: React.FC<$heading.Header> = (
  // {title, subtitle}
    header
) => {

  // const HEADER = new $heading.Header(title, subtitle);
  const HEADER = header;
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutI header={HEADER}/>}>
            <Route index element={<ViewHome />}/>
            <Route path="/department" element={<ViewDepartment />}/>
            <Route path="/department/engineering" element={<ViewEngineering />}/>
            <Route path="/department/engineering/geodetic-engineer" element={<ViewGeodeticEngineering/>}/>
            <Route path="/department/engineering/computer-engineer" element={<ViewComputerEngineering/>}/>
            <Route path="*" element={<><h1 className="text-red-600 text-[5rem] font-semibold">PAGE NOT FOUND</h1></>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
