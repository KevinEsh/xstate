import React from 'react';
import typeStyles from './typography.module.css';
import cn from 'classnames';

export class Heading extends React.Component {
  render() {
    const { tag: Tag, id } = this.props;

    return (
      <Tag className={cn(typeStyles.heading, typeStyles[Tag])} id={id}>
        <a className={cn(typeStyles.headingLink)} href={`#${id}`}>
          <span>{this.props.children}</span>
        </a>
      </Tag>
    );
  }
}

export function Anchor(props) {
  return <a {...props} className={cn(typeStyles.anchor)} />;
}
