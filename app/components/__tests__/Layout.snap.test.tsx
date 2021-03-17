import React from 'react';
import renderer from 'react-test-renderer';

import Layout from '../Layout';

const MockChildren = <h1>Test</h1>;

it('Layout render correctly', () => {
  const tree = renderer.create(<Layout>{MockChildren}</Layout>).toJSON();

  expect(tree).toMatchSnapshot();
});
