import React from 'react';
import styles from '../css/LaunchpadProject.css';

export default function YoutubePlayer({ src }) {
    return (
        <div className={styles.videobox}>
            <iframe frameBorder="0" src={src} allowFullScreen="true" />
        </div>
    )
}