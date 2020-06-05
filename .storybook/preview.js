import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(storyFn => <div style={{ 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem',
  backgroundColor: '#262533'
}}>{storyFn()}</div>);
