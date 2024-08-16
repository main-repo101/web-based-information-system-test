import { deleteAsync } from 'del';

(async () => {
  //REM: Delete the dist directory and all its contents
  await deleteAsync(['dist/**']);
})();