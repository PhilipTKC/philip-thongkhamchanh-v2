import { dom, library, config } from '@fortawesome/fontawesome-svg-core';
import {
    faAngleRight,
    faBookReader,
    faBoxArchive,
    faBriefcase,
    faCheck,
    faEye,
    faFilePdf,
    faHomeLgAlt,
    faStar,
    faTasks,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faAngleRight,
    faBookReader,
    faBoxArchive,
    faBriefcase,
    faCheck,
    faEye,
    faFilePdf,
    faHomeLgAlt,
    faStar,
    faTasks,
);

config.keepOriginalSource = false;

export { dom }