import StreamList from '../pages/streams/list';
import StreamCreate from '../pages/streams/create';
import StreamEdit from '../pages/streams/edit';
import StreamDelete from '../pages/streams/delete';
import StreamShow from '../pages/streams/show';

const routesData = [
  {
    path: '/',
    component: StreamList,
  },
  {
    path: '/streams/new',
    component: StreamCreate,
  },
  {
    path: '/streams/edit',
    component: StreamEdit,
  },
  {
    path: '/streams/delete',
    component: StreamDelete,
  },
  {
    path: '/streams/show',
    component: StreamShow,
  },
];

export default routesData;
