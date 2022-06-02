/*
 * @Author: Doctor
 * @Date: 2021-12-05 17:11:36
 * @LastEditTime: 2021-12-05 23:01:33
 * @LastEditors: Doctor
 * @Description:
 * @FilePath: \qy\src\components\Footer\index.tsx
 * jianqiang
 */
import {
  YoutubeIcon,
  DiscordIcon,
  InstagramIcon,
  TelegramIcon,
} from '@/components/Icon';
import styles from './index.less';
const Footer = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.hr} />
      <div className={styles.contact}>
        <a
          href="https://youtube.com/channel/UC1_lxbui7GBjZhH2ddFCLyA"
          target="_blank"
        >
          <YoutubeIcon />
        </a>
        <a href="https://www.instagram.com/cryptoj2045/" target="_blank">
          <InstagramIcon />
        </a>
        <a href="https://t.me/cruptojcrew" target="_blank">
          <TelegramIcon />
        </a>
        <a href="https://discord.gg/u99hR3F6m2" target="_blank">
          <DiscordIcon />
        </a>
      </div>
      <div className={styles.coypright}>Copyright © 2021-2022 Cyber J Club</div>
    </div>
  );
};
export default Footer;
