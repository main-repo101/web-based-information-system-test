import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViewDepartment from '@main/it/campus/view/department/index.tsx';
// import Engineering from '@/main/it/campus/view/department/engineering/index.tsx';
import ViewEngineering from '@main/it/campus/view/department/engineering/index.tsx';
import ViewGeodeticEngineering from '@main/it/campus/view/department/engineering/ViewGeodeticEngineering.tsx';
import ViewComputerEngineering from '@main/it/campus/view/department/engineering/ViewComputerEngineering.tsx';
import LayoutI  from '@main/it/campus/layout/layout-i.tsx';
import ViewHome from '@main/it/campus/view/index.tsx';

import { $it$campus$model$heading as $heading} from '@main/it/campus/model/heading/package-info.mts';

const App: React.FC<$heading.Header> = (
  // {title, subtitle}
    header
) => {

  // const HEADER = new $heading.Header(title, subtitle);
  const HEADER = header;
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LayoutI className={`flex flex-col`} header={HEADER}/>}>
            <Route index element={<ViewHome className={`flex flex-col items-center`}/>}/>
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
