// import Room from '../Room/Room';
import React from 'react';
import Room from '../room/Room';
import Hall from '../hall/Hall';
import styles from './GameBoard.module.css';

export default function GameBoard() {
  return (
    <div className={styles['grid-container']}>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']} />
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']} />
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']} />
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']} />
      <div className={styles['grid-item']} style={{ transform: 'rotate(90deg)' }}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
      <div className={styles['grid-item']}>
        <Hall />
      </div>
      <div className={styles['grid-item']}>
        <Room />
      </div>
    </div>
  );
}
