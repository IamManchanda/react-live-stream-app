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
    ownProps: {},
  },
  {
    path: '/streams/create',
    page: StreamCreate,
    ownProps: {},
  },
  {
    path: '/streams/:id(\\d+)',
    page: StreamShow,
    ownProps: {},
  },
  {
    path: '/streams/:id(\\d+)/edit/',
    page: StreamEdit,
    ownProps: {},
  },
  {
    path: '/streams/delete',
    page: StreamDelete,
    ownProps: {},
  },
];

routesData.forEach(function iterateRoutesData(item) {
  item.uuid = uuid.v4();
});

export default routesData;
