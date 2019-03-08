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
    page: StreamList,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/new',
    page: StreamCreate,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/edit',
    page: StreamEdit,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/delete',
    page: StreamDelete,
    extraProps: {},
  },
  {
    id: uuid.v4(),
    path: '/streams/show',
    page: StreamShow,
    extraProps: {},
  },
];

export default routesData;
