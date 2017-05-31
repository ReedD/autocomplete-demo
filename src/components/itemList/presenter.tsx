import * as React from 'react';

export class ItemList extends React.Component<any, any> {
  public render() {
    return (
      <ul>
        {this.props.items.map((item: any, index: number) => {
           return <li key={item.abbr}>{item.name}</li>;
        })}
      </ul>
    );
  }
}
