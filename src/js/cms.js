import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/products";
import ProgramsPreview from "./cms-preview-templates/programs";
import ContactPreview from "./cms-preview-templates/contact";
import CLEPreview from "./cms-preview-templates/cle";
import DonatePreview from "./cms-preview-templates/donate";
import AboutPreview from "./cms-preview-templates/about";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("products", ProductsPreview);
CMS.registerPreviewTemplate("programs", ProgramsPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("cle", CLEPreview);
CMS.registerPreviewTemplate("donate", DonatePreview);
CMS.registerPreviewTemplate("about", AboutPreview);
CMS.init();
