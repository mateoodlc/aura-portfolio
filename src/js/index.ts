/**
 * Modules
 */
import { silcCoreInit } from "silc-core";
import { silcAccordionInit } from "silc-accordion";
import { silcNavInit } from "silc-nav";
import { silcOffcanvasInit } from "silc-offcanvas";
import focusWithin from "focus-within";

import {SilcCarouselInit} from "../components/carousel/carousel";
import Tablesaw from "../components/table/table";
import Modal from "../components/modal/modal";

/**
 * Init
 */
focusWithin(document);
silcCoreInit();
silcAccordionInit();
silcNavInit();
silcOffcanvasInit();
SilcCarouselInit();
Tablesaw.init();
Modal.init();

/**
 * Example VueJS app
 */
import { vueApp } from "./vue-app";
vueApp;


