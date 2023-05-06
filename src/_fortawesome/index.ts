import { dom, library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faAnglesDown,
  faAngleRight,
  faBookReader,
  faBoxArchive,
  faBriefcase,
  faCheck,
  faEye,
  faFilePdf,
  faHomeLgAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAnglesDown,
  faAngleRight,
  faBookReader,
  faBoxArchive,
  faBriefcase,
  faCheck,
  faEye,
  faFilePdf,
  faHomeLgAlt,
  faTasks,
);

config.keepOriginalSource = false;

export { dom }
