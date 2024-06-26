import "resize-observer-polyfill";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Button, { ButtonStyle } from "buttons/Button";
import { EditorContext, getDeltaSummary } from "@bobaboard/boba-editor";
import Input, { InputStyle } from "common/Input";
import ToastContainer, { toast } from "common/Toast";

import BoardSidebar from "sidebar/BoardSidebar";
import BoardsDisplay from "board/BoardsDisplay";
import BobaDex from "user/BobaDex";
import BottomBar from "layout/BottomBar";
import CollapsedPlaceholder from "thread/CollapsedPlaceholder";
import Comment, { type CommentHandler } from "post/Comment";
import CommentChainEditor from "post/CommentChainEditor";
import CommentEditor from "post/CommentEditor";
import CompactPostThread from "post/CompactPostThread";
import CustomCursor from "layout/CustomCursor";
import DefaultTheme from "theme/default";
import FeedWithMenu from "feeds/FeedWithMenu";
import Layout from "layout/Layout";
import LoadingBar from "common/LoadingBar";
import MasonryView from "feeds/MasonryView";
import Modal from "common/Modal";
import ModalWithButtons from "common/ModalWithButtons";
import NewCommentsThread from "thread/NewCommentsThread";
import NewThread from "thread/NewThread";
import HiddenThread from "thread/ThreadPreview";
import PinnedMenu from "sidemenu/PinnedMenu";
import Post, { type PostHandler } from "post/Post";
import PostEditor from "post/PostEditor";
import PostQuote from "post/PostQuote";
import React from "react";
import RulesBlock from "blocks/RulesBlock";
import SegmentedButton from "buttons/SegmentedButton";
import SettingsContainer, { type SettingType } from "layout/SettingsContainer";
import SideMenu, { type SideMenuHandler } from "sidemenu/SideMenu";
import SidebarSection from "sidebar/SidebarSection";
import SubscriptionBlock from "blocks/SubscriptionBlock";
import BoardListBlock from "blocks/BoardListBlock";
import TabsGroup from "layout/TabsGroup";
import { TagType, type TagsType } from "types";
import TagsFilterSection from "sidebar/TagsFilterSection";
import UserDetails from "user/UserDetails";
import flush from "styled-jsx/server";
import useBoos from "extra/useBoos";

interface ImageUploaderContextProps {
  onImageUploadRequest: (imgUrl: string) => Promise<string>;
}
const ImageUploaderContext =
  React.createContext<ImageUploaderContextProps | null>(null);

export {
  Layout,
  Button,
  RulesBlock,
  SubscriptionBlock,
  BoardListBlock,
  ButtonStyle,
  SideMenu,
  Input,
  InputStyle,
  Modal,
  UserDetails,
  ModalWithButtons,
  PinnedMenu,
  Post,
  PostEditor,
  Comment,
  CommentChainEditor,
  CompactPostThread,
  CommentEditor,
  FeedWithMenu,
  BoardSidebar,
  SidebarSection,
  BoardsDisplay,
  ToastContainer,
  MasonryView,
  LoadingBar,
  toast,
  EditorContext,
  ImageUploaderContext,
  flush,
  DefaultTheme,
  TagsFilterSection,
  PostQuote,
  NewThread,
  HiddenThread,
  CollapsedPlaceholder,
  BobaDex,
  SegmentedButton,
  NewCommentsThread,
  TagType,
  CustomCursor,
  SettingsContainer,
  TabsGroup,
  useBoos,
  getDeltaSummary,
  BottomBar,
};

export type {
  TagsType,
  PostHandler,
  CommentHandler,
  SideMenuHandler,
  SettingType,
};
