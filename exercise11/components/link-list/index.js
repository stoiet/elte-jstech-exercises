import React, { Component } from 'react';
import { LinkItem } from '../';
import './index.css';

export const LinkList = ({ links }) => (
  <div className={ 'link-list' }>
    { _linkItems(links) }
  </div>
);

function _linkItems(links) {
  return links.map((link, index) =>
    <LinkItem key={ index } text={ link.text } href={ link.href } />
  );
}
