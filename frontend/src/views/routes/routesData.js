import uuid from 'uuid';

import StreamList from '../pages/streams/list';
import StreamCreate from '../pages/streams/create';
import StreamEdit from '../pages/streams/edit';
import StreamDelete from '../pages/streams/delete';
import StreamShow from '../pages/streams/show';

const routesData = [
  {
    path: '/',
    page: StreamList,
    extraProps: {},
  },
  {
    path: '/streams/create',
    page: StreamCreate,
    extraProps: {},
  },
  {
    path: '/streams/edit',
    page: StreamEdit,
    extraProps: {},
  },
  {
    path: '/streams/delete',
    page: StreamDelete,
    extraProps: {},
  },
  {
    path: '/streams/show',
    page: StreamShow,
    extraProps: {},
  },
];

routesData.forEach(item => item.id = uuid.v4());

export default routesData;
