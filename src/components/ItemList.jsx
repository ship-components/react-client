// todo: add @flow
// problem w immutable flow types:
// https://github.com/flowtype/flow-typed/issues/1068

import * as React from "react";
import type { List, Map } from 'immutable'
import { connect } from 'react-redux';
import css from './ItemList.css';

// This is our select function that will extract from the state the data slice we want to expose
// through props to our component.
const mapStateToProps = (state/*, ownProps*/) => {
    return {
      items: state.get('items')
    }
}

type Item = Map<string, any>;
type Props = {
    items: List<Item>;
}

class ItemList extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1 className={css.title}>
                    Items
                </h1>
                <ul className={css.list}>
                {this.props.items && this.props.items.size ?
                    this.props.items.map((item: Item) => 
                        <li 
                            key={item.get('id')}
                            className={css.listItem}
                        >
                            {item.get('name')}
                        </li>
                    )
                : <li>No items.</li>}
                </ul>
            </div>);
    }
}
  
const connectedItemList = connect(mapStateToProps)(ItemList);
export default connectedItemList;
