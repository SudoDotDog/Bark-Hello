/**
 * @author WMXPY
 * @overview generated by ghoti-cli
 * @fileoverview Component set ComponentGhotiCard
 */

import * as React from 'react';
import { ICard } from '../interface';


export type CardProps = {
    readonly card: ICard;
};

export class Card extends React.Component<CardProps> {

    public render() {
        return (<div className="card">
            <button className="link" onClick={() => {
                if (this.props.card.url.substring(0, 4) !== 'http') {
                    window.location.href = 'http://' + this.props.card.url;
                } else {
                    window.location.href = this.props.card.url;
                }
            }}>
                <div className="left">
                    <img src={"https://plus.google.com/_/favicon?domain=" + this.props.card.url} alt={this.props.card.url} />
                </div>
                <div className="right">{this.props.card.name}</div>
            </button>
        </div>);
    }
}
