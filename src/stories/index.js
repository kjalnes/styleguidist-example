import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withState } from '@dump247/storybook-state';

import { Button, Welcome } from '@storybook/react/demo';

import Modal from '../components/Modal/Modal';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Modal', module)
  .add('About this modal', withState({ isOpen: false })(({ store }) => (
  	<Modal isOpen={false} />
  ),);

// storiesOf('Modal', module)
//   .add('About this modal', () => (
//   	<Modal />
//   ));