import * as React from 'react';
import { Link } from 'react-router-dom';
import Exception from '../../components/Exception';

const FourZeroFour = () => (
  <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />
);

export default FourZeroFour;
