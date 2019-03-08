import uuid from "uuid";

import StreamList from '../pages/streams/list';
import StreamCreate from '../pages/streams/create';
import StreamEdit from '../pages/streams/edit';
import StreamDelete from '../pages/streams/delete';
import StreamShow from '../pages/streams/show';

const routesData = [
  {
    id: uuid.v4(),
    path: '/',
    component: StreamList,
  },
  {
    id: uuid.v4(),
    path: '/streams/new',
    component: StreamCreate,
  },
  {
    id: uuid.v4(),
    path: '/streams/edit',
    component: StreamEdit,
  },
  {
    id: uuid.v4(),
    path: '/streams/delete',
    component: StreamDelete,
  },
  {
    id: uuid.v4(),
    path: '/streams/show',
    component: StreamShow,
  },
];

export default routesData;
