import uuid from 'uuid';

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
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/new',
    component: StreamCreate,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/edit',
    component: StreamEdit,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/delete',
    component: StreamDelete,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/show',
    component: StreamShow,
    extraProps: {},
  },
];

export default routesData;
