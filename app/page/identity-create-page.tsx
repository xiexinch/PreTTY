import * as React from 'react';

import * as styles from './identity-create-page.scss';
import { IPageViewProps } from '../model/page';

export class IdentityCreatePage extends React.Component<IPageViewProps> {
  public render() {
    return (
      <div className={styles.container}>
        Identity Create Page
      </div>
    );
  }
 }
