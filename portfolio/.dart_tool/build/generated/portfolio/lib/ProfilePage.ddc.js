define(['dart_sdk', 'packages/portfolio/responsive_widget', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, packages__portfolio__responsive_widget, packages__flutter_web__material, packages__flutter_web__animation, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const responsive_widget = packages__portfolio__responsive_widget.responsive_widget;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const colors = packages__flutter_web__material.src__material__colors;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const outline_button = packages__flutter_web__material.src__material__outline_button;
  const raised_button = packages__flutter_web__material.src__material__raised_button;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const implicit_animations = packages__flutter_web__animation.src__widgets__implicit_animations;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const text = packages__flutter_web__animation.src__widgets__text;
  const box_decoration = packages__flutter_web__animation.src__painting__box_decoration;
  const box_border = packages__flutter_web__animation.src__painting__box_border;
  const borders = packages__flutter_web__animation.src__painting__borders;
  const stadium_border = packages__flutter_web__animation.src__painting__stadium_border;
  const container = packages__flutter_web__animation.src__widgets__container;
  const decoration_image = packages__flutter_web__animation.src__painting__decoration_image;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const colors$ = packages__flutter_web__src__animation__animation.src__painting__colors;
  const image_resolution = packages__flutter_web__src__animation__animation.src__painting__image_resolution;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const box_fit = packages__flutter_web__src__animation__animation.src__painting__box_fit;
  const ui = packages__flutter_web_ui__ui.ui;
  const ProfilePage = Object.create(dart.library);
  const $open = dartx.open;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 14,
        line: 16,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 14,
        line: 17,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 20,
        line: 15,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [_bottom]: 20,
        [_right]: 20,
        [_top]: 20,
        [_left]: 20
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 21,
        line: 29,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 22,
        line: 30,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 20,
        line: 28,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 21,
        line: 35,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 23,
        line: 36,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 19,
        line: 34,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 21,
        line: 41,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 21,
        line: 42,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 19,
        line: 40,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 18,
        line: 25,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 18,
        line: 26,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 23,
        line: 23,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 16,
        line: 23,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 16,
        line: 21,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C25() {
      return C25 = dart.constList([], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 21,
        line: 65,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 25,
        line: 68,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 21,
        line: 66,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 21,
        line: 71,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 25,
        line: 74,
        file: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C31 || CT.C31,
        name: null,
        column: 21,
        line: 72,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 21,
        line: 77,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 20,
        line: 62,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 20,
        line: 63,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 33,
        line: 60,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 20,
        line: 60,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 25,
        line: 58,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "duration",
        column: 18,
        line: 56,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 18,
        line: 57,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 18,
        line: 58,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 23,
        line: 54,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 16,
        line: 54,
        file: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C47 || CT.C47,
        name: null,
        column: 21,
        line: 52,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 12,
        line: 14,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 12,
        line: 15,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "drawer",
        column: 14,
        line: 20,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 14,
        line: 52,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 23,
        line: 13,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 10,
        line: 13,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 16,
        line: 11,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 11,
        line: 105,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 108,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 13,
        line: 107,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 100,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 9,
        line: 103,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 104,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65, C66 || CT.C66], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 20,
        line: 99,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 7,
        line: 99,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 12,
        line: 98,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 11,
        line: 122,
        file: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textScaleFactor",
        column: 11,
        line: 123,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 124,
        file: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C71 || CT.C71,
        name: null,
        column: 9,
        line: 121,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 129,
        file: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C76 || CT.C76,
        name: null,
        column: 9,
        line: 128,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "duration",
        column: 11,
        line: 132,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 133,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 134,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 11,
        line: 135,
        file: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C79 || CT.C79,
        name: null,
        column: 9,
        line: 131,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 120,
        file: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C85 || CT.C85,
        name: null,
        column: 12,
        line: 119,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4293128957.0
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4290502395.0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4287679225.0
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4284790262.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4282557941.0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4280391411.0
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4280191205.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4279858898.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4279592384.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4279060385.0
      });
    },
    get C88() {
      return C88 = dart.constMap(core.int, ui.Color, [50, C89 || CT.C89, 100, C90 || CT.C90, 200, C91 || CT.C91, 300, C92 || CT.C92, 400, C93 || CT.C93, 500, C94 || CT.C94, 600, C95 || CT.C95, 700, C96 || CT.C96, 800, C97 || CT.C97, 900, C98 || CT.C98]);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: colors.MaterialColor.prototype,
        [_value]: 4280391411.0,
        [_swatch]: C88 || CT.C88
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 157,
        file: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C100 || CT.C100,
        name: null,
        column: 14,
        line: 157,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 157,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "borderSide",
        column: 7,
        line: 158,
        file: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 7,
        line: 161,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "highlightedBorderColor",
        column: 7,
        line: 162,
        file: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C103 || CT.C103,
        name: null,
        column: 12,
        line: 156,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 192,
        file: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textScaleFactor",
        column: 9,
        line: 193,
        file: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 194,
        file: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C109 || CT.C109,
        name: null,
        column: 7,
        line: 191,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 197,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textScaleFactor",
        column: 9,
        line: 198,
        file: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 199,
        file: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 7,
        line: 196,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 205,
        file: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C119 || CT.C119,
        name: null,
        column: 7,
        line: 204,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 11,
        line: 207,
        file: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "softWrap",
        column: 9,
        line: 210,
        file: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textScaleFactor",
        column: 9,
        line: 211,
        file: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 212,
        file: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C122 || CT.C122,
        name: null,
        column: 7,
        line: 207,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 215,
        file: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C128 || CT.C128,
        name: null,
        column: 7,
        line: 214,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 25,
        line: 222,
        file: null
      });
    },
    get C131() {
      return C131 = dart.constList([C132 || CT.C132], widget_inspector._Location);
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C131 || CT.C131,
        name: null,
        column: 20,
        line: 222,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "shape",
        column: 13,
        line: 221,
        file: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 222,
        file: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 13,
        line: 223,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 224,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 227,
        file: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136, C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C134 || CT.C134,
        name: null,
        column: 11,
        line: 220,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 230,
        file: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C141 || CT.C141,
        name: null,
        column: 11,
        line: 229,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 25,
        line: 237,
        file: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145], widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C144 || CT.C144,
        name: null,
        column: 20,
        line: 237,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "borderSide",
        column: 13,
        line: 233,
        file: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "shape",
        column: 13,
        line: 236,
        file: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 237,
        file: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 13,
        line: 238,
        file: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 13,
        line: 239,
        file: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 242,
        file: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152, C153 || CT.C153], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C147 || CT.C147,
        name: null,
        column: 11,
        line: 232,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 218,
        file: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 219,
        file: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C155 || CT.C155,
        name: null,
        column: 7,
        line: 217,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 7,
        line: 189,
        file: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 190,
        file: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161], widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C159 || CT.C159,
        name: null,
        column: 26,
        line: 188,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 170,
        file: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 9,
        line: 173,
        file: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 9,
        line: 176,
        file: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165, C166 || CT.C166], widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C163 || CT.C163,
        name: null,
        column: 28,
        line: 169,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 254,
        file: null
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 9,
        line: 255,
        file: null
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 256,
        file: null
      });
    },
    get C168() {
      return C168 = dart.constList([C169 || CT.C169, C170 || CT.C170, C171 || CT.C171], widget_inspector._Location);
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C168 || CT.C168,
        name: null,
        column: 20,
        line: 253,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 264,
        file: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C173 || CT.C173,
        name: null,
        column: 11,
        line: 263,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 259,
        file: null
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 260,
        file: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 261,
        file: null
      });
    },
    get C176() {
      return C176 = dart.constList([C177 || CT.C177, C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C176 || CT.C176,
        name: null,
        column: 20,
        line: 258,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 7,
        line: 253,
        file: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "smallScreen",
        column: 7,
        line: 258,
        file: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C181 || CT.C181,
        name: null,
        column: 12,
        line: 252,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 9,
        line: 278,
        file: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 279,
        file: null
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 9,
        line: 282,
        file: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187, C188 || CT.C188], widget_inspector._Location);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C185 || CT.C185,
        name: null,
        column: 7,
        line: 277,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 9,
        line: 285,
        file: null
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 286,
        file: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 9,
        line: 289,
        file: null
      });
    },
    get C190() {
      return C190 = dart.constList([C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C190 || CT.C190,
        name: null,
        column: 7,
        line: 284,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 9,
        line: 293,
        file: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 294,
        file: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 9,
        line: 297,
        file: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C195 || CT.C195,
        name: null,
        column: 7,
        line: 292,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 9,
        line: 301,
        file: null
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 302,
        file: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 9,
        line: 305,
        file: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201, C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C200 || CT.C200,
        name: null,
        column: 7,
        line: 300,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 9,
        line: 312,
        file: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 9,
        line: 313,
        file: null
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 314,
        file: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207, C208 || CT.C208], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C205 || CT.C205,
        name: null,
        column: 29,
        line: 311,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 13,
        line: 326,
        file: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 327,
        file: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C210 || CT.C210,
        name: null,
        column: 11,
        line: 325,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 9,
        line: 323,
        file: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 324,
        file: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C214 || CT.C214,
        name: null,
        column: 20,
        line: 322,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 9,
        line: 333,
        file: null
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 334,
        file: null
      });
    },
    get C218() {
      return C218 = dart.constList([C219 || CT.C219, C220 || CT.C220], widget_inspector._Location);
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C218 || CT.C218,
        name: null,
        column: 20,
        line: 332,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "largeScreen",
        column: 7,
        line: 322,
        file: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "smallScreen",
        column: 7,
        line: 332,
        file: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223, C224 || CT.C224], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C222 || CT.C222,
        name: null,
        column: 12,
        line: 321,
        file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart"
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  const _bottom = dart.privateName(edge_insets, "_bottom");
  const _right = dart.privateName(edge_insets, "_right");
  const _top = dart.privateName(edge_insets, "_top");
  const _left = dart.privateName(edge_insets, "_left");
  let C4;
  let C7;
  let C8;
  let C6;
  let C5;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C16;
  let C14;
  let C13;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  let C25;
  let C24;
  let C28;
  let C27;
  let C26;
  let C29;
  let C32;
  let C31;
  let C30;
  let C33;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C44;
  let C45;
  let C42;
  let C41;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C53;
  let C54;
  let C50;
  let C49;
  let C57;
  let C56;
  let C55;
  ProfilePage.ProfilePage = class ProfilePage$ extends framework.StatelessWidget {
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new scaffold.Scaffold.new({backgroundColor: colors.Colors.black, appBar: new app_bar.AppBar.new({elevation: 0.0, backgroundColor: colors.Colors.black, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), drawer: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new drawer.Drawer.new({child: new scroll_view.ListView.new({padding: C4 || CT.C4, children: JSArrayOfWidget().of([new ProfilePage.NavButton.new({text: "about", onPressed: dart.fn(() => {
                    html.window[$open]("https://www.linkedin.com/in/ipshitaghosh13/", "About");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new ProfilePage.NavButton.new({text: "work", onPressed: dart.fn(() => {
                    html.window[$open]("https://github.com/ipshitag?tab=repositories", "Work");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new ProfilePage.NavButton.new({text: "contact", onPressed: dart.fn(() => {
                    html.window[$open]("https://www.linkedin.com/in/ipshitaghosh13/detail/contact-info/", "IG");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C13 || CT.C13})]), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}) : null, body: new single_child_scroll_view.SingleChildScrollView.new({child: new implicit_animations.AnimatedPadding.new({duration: new core.Duration.new({seconds: 1}), padding: new edge_insets.EdgeInsets.all(dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.1), child: new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new ProfilePage.NavHeader.new({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new ProfilePage.ProfileInfo.new({$creationLocationd_0dea112b090073317d4: C29 || CT.C29}), new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.2, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new ProfilePage.SocialInfo.new({$creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
    }
  };
  (ProfilePage.ProfilePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ProfilePage.ProfilePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.ProfilePage.prototype;
  dart.addTypeTests(ProfilePage.ProfilePage);
  dart.setMethodSignature(ProfilePage.ProfilePage, () => ({
    __proto__: dart.getMethods(ProfilePage.ProfilePage.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.ProfilePage, "package:portfolio/ProfilePage.dart");
  let C58;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C66;
  let C63;
  let C62;
  let C69;
  let C68;
  let C67;
  ProfilePage.NavHeader = class NavHeader extends framework.StatelessWidget {
    get navButtons() {
      return this[navButtons$];
    }
    set navButtons(value) {
      super.navButtons = value;
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Row.new({mainAxisAlignment: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? flex.MainAxisAlignment.center : flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: flex.CrossAxisAlignment.center, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new ProfilePage.IGDot.new({$creationLocationd_0dea112b090073317d4: C58 || CT.C58}));
            if (!dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context))) t0[$add](new basic.Row.new({children: this.navButtons, $creationLocationd_0dea112b090073317d4: C59 || CT.C59}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C67 || CT.C67});
    }
  };
  (ProfilePage.NavHeader.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navButtons = opts && 'navButtons' in opts ? opts.navButtons : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navButtons$] = navButtons;
    ProfilePage.NavHeader.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.NavHeader.prototype;
  dart.addTypeTests(ProfilePage.NavHeader);
  const navButtons$ = Symbol("NavHeader.navButtons");
  dart.setMethodSignature(ProfilePage.NavHeader, () => ({
    __proto__: dart.getMethods(ProfilePage.NavHeader.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.NavHeader, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.NavHeader, () => ({
    __proto__: dart.getFields(ProfilePage.NavHeader.__proto__),
    navButtons: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C72;
  let C73;
  let C74;
  let C71;
  let C70;
  let C77;
  let C76;
  let C75;
  let C80;
  let C81;
  let C82;
  let C83;
  let C79;
  let C78;
  let C86;
  let C85;
  let C84;
  ProfilePage.IGDot = class IGDot extends framework.StatelessWidget {
    build(context) {
      return new basic.Row.new({children: JSArrayOfWidget().of([new text.Text.new("IG", {textScaleFactor: 2.0, style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), new basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({seconds: 1}), height: 8.0, width: 8.0, decoration: new box_decoration.BoxDecoration.new({shape: box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78})]), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
    }
  };
  (ProfilePage.IGDot.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ProfilePage.IGDot.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.IGDot.prototype;
  dart.addTypeTests(ProfilePage.IGDot);
  dart.setMethodSignature(ProfilePage.IGDot, () => ({
    __proto__: dart.getMethods(ProfilePage.IGDot.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.IGDot, "package:portfolio/ProfilePage.dart");
  const _value = dart.privateName(ui, "_value");
  let C89;
  let C90;
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C88;
  const _swatch = dart.privateName(colors$, "_swatch");
  let C87;
  let C101;
  let C100;
  let C99;
  let C104;
  let C105;
  let C106;
  let C107;
  let C103;
  let C102;
  ProfilePage.NavButton = class NavButton extends framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      return new outline_button.OutlineButton.new({child: new text.Text.new(core.String._check(this.text), {$creationLocationd_0dea112b090073317d4: C99 || CT.C99}), borderSide: new borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), highlightedBorderColor: this.color, $creationLocationd_0dea112b090073317d4: C102 || CT.C102});
    }
  };
  (ProfilePage.NavButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : C87 || CT.C87;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onPressed$] = onPressed;
    this[color$] = color;
    ProfilePage.NavButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.NavButton.prototype;
  dart.addTypeTests(ProfilePage.NavButton);
  const text$ = Symbol("NavButton.text");
  const onPressed$ = Symbol("NavButton.onPressed");
  const color$ = Symbol("NavButton.color");
  dart.setMethodSignature(ProfilePage.NavButton, () => ({
    __proto__: dart.getMethods(ProfilePage.NavButton.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.NavButton, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.NavButton, () => ({
    __proto__: dart.getFields(ProfilePage.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui.Color)
  }));
  let C110;
  let C111;
  let C112;
  let C109;
  let C108;
  let C115;
  let C116;
  let C117;
  let C114;
  let C113;
  let C120;
  let C119;
  let C118;
  let C123;
  let C124;
  let C125;
  let C126;
  let C122;
  let C121;
  let C129;
  let C128;
  let C127;
  let C132;
  let C131;
  let C130;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C134;
  let C133;
  let C142;
  let C141;
  let C140;
  let C145;
  let C144;
  let C143;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C153;
  let C147;
  let C146;
  let C156;
  let C157;
  let C155;
  let C154;
  let C160;
  let C161;
  let C159;
  let C158;
  let C164;
  let C165;
  let C166;
  let C163;
  let C162;
  let C169;
  let C170;
  let C171;
  let C168;
  let C167;
  let C174;
  let C173;
  let C172;
  let C177;
  let C178;
  let C179;
  let C176;
  let C175;
  let C182;
  let C183;
  let C181;
  let C180;
  ProfilePage.ProfileInfo = class ProfileInfo extends framework.StatelessWidget {
    get profileData() {
      return this[profileData];
    }
    set profileData(value) {
      super.profileData = value;
    }
    profileImage(context) {
      return new container.Container.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(framework.BuildContext._check(context))) ? dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.25, width: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(framework.BuildContext._check(context))) ? dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(media_query.MediaQuery.of(framework.BuildContext._check(context)).size.width) * 0.25, decoration: new box_decoration.BoxDecoration.new({backgroundBlendMode: ui.BlendMode.luminosity, color: colors.Colors.lightBlueAccent, shape: box_border.BoxShape.circle, image: new decoration_image.DecorationImage.new({image: new image_resolution.AssetImage.new("ipshitaImage.jpeg"), alignment: alignment.Alignment.center, fit: box_fit.BoxFit.cover})}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([framework.Widget._check(this.profileImage(context)), this.profileData]), $creationLocationd_0dea112b090073317d4: C167 || CT.C167}), smallScreen: new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([framework.Widget._check(this.profileImage(context)), new basic.SizedBox.new({height: dart.notNull(media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), this.profileData]), $creationLocationd_0dea112b090073317d4: C175 || CT.C175}), $creationLocationd_0dea112b090073317d4: C180 || CT.C180});
    }
  };
  (ProfilePage.ProfileInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[profileData] = new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new text.Text.new("Hi there! My name is", {textScaleFactor: 2.0, style: new text_style.TextStyle.new({color: colors.Colors.blue._get(800)}), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), new text.Text.new("Ipshita\nGhosh", {textScaleFactor: 5.0, style: new text_style.TextStyle.new({color: colors.Colors.white, fontWeight: ui.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), new text.Text.new("A 'developing' developer, who loves to code.\n" + "I also work hard in keeping my github all green.\n", {softWrap: true, textScaleFactor: 1.5, style: new text_style.TextStyle.new({color: colors.Colors.white70}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), new basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new raised_button.RaisedButton.new({shape: new stadium_border.StadiumBorder.new(), child: new text.Text.new("Resume", {$creationLocationd_0dea112b090073317d4: C130 || CT.C130}), color: colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("https://docdro.id/ebAmRmR", "IG");
              }, VoidToNull()), padding: new edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: C133 || CT.C133}), new basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), new outline_button.OutlineButton.new({borderSide: new borders.BorderSide.new({color: colors.Colors.red}), shape: new stadium_border.StadiumBorder.new(), child: new text.Text.new("Say Hi!", {$creationLocationd_0dea112b090073317d4: C143 || CT.C143}), color: colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("mailto:iuippi3@gmail.com", "IG");
              }, VoidToNull()), padding: new edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: C146 || CT.C146})]), $creationLocationd_0dea112b090073317d4: C154 || CT.C154})]), $creationLocationd_0dea112b090073317d4: C158 || CT.C158});
    ProfilePage.ProfileInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.ProfileInfo.prototype;
  dart.addTypeTests(ProfilePage.ProfileInfo);
  const profileData = Symbol("ProfileInfo.profileData");
  dart.setMethodSignature(ProfilePage.ProfileInfo, () => ({
    __proto__: dart.getMethods(ProfilePage.ProfileInfo.__proto__),
    profileImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.ProfileInfo, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.ProfileInfo, () => ({
    __proto__: dart.getFields(ProfilePage.ProfileInfo.__proto__),
    profileData: dart.finalFieldType(basic.Column)
  }));
  let C186;
  let C187;
  let C188;
  let C185;
  let C184;
  let C191;
  let C192;
  let C193;
  let C190;
  let C189;
  let C196;
  let C197;
  let C198;
  let C195;
  let C194;
  let C201;
  let C202;
  let C203;
  let C200;
  let C199;
  let C206;
  let C207;
  let C208;
  let C205;
  let C204;
  let C211;
  let C212;
  let C210;
  let C209;
  let C215;
  let C216;
  let C214;
  let C213;
  let C219;
  let C220;
  let C218;
  let C217;
  let C223;
  let C224;
  let C222;
  let C221;
  ProfilePage.SocialInfo = class SocialInfo extends framework.StatelessWidget {
    socialMediaWidgets() {
      return JSArrayOfWidget().of([new ProfilePage.NavButton.new({text: "Github", onPressed: dart.fn(() => {
            html.window[$open]("https://github.com/ipshitag", "Git");
          }, VoidToNull()), color: colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C184 || CT.C184}), new ProfilePage.NavButton.new({text: "LinkedIn", onPressed: dart.fn(() => {
            html.window[$open]("https://www.linkedin.com/in/ipshitaghosh13/", "LinkedIn");
          }, VoidToNull()), color: colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C189 || CT.C189}), new ProfilePage.NavButton.new({text: "StackOverflow", onPressed: dart.fn(() => {
            html.window[$open]("https://stackoverflow.com/users/story/7449819", "StackOverflow");
          }, VoidToNull()), color: colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C194 || CT.C194}), new ProfilePage.NavButton.new({text: "Techgig", onPressed: dart.fn(() => {
            html.window[$open]("https://www.techgig.com/ipshitag", "Techgig");
          }, VoidToNull()), color: colors.Colors.blue, $creationLocationd_0dea112b090073317d4: C199 || CT.C199})]);
    }
    copyRightText() {
      return new text.Text.new("Pawan Kumar ©️2019", {textAlign: ui.TextAlign.center, style: new text_style.TextStyle.new({color: colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204});
    }
    build(context) {
      return new responsive_widget.ResponsiveWidget.new({largeScreen: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.start, children: this.socialMediaWidgets(), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), this.copyRightText()]), $creationLocationd_0dea112b090073317d4: C213 || CT.C213}), smallScreen: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            for (let t2 of this.socialMediaWidgets())
              t1[$add](t2);
            t1[$add](this.copyRightText());
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: C217 || CT.C217}), $creationLocationd_0dea112b090073317d4: C221 || CT.C221});
    }
  };
  (ProfilePage.SocialInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    ProfilePage.SocialInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.SocialInfo.prototype;
  dart.addTypeTests(ProfilePage.SocialInfo);
  dart.setMethodSignature(ProfilePage.SocialInfo, () => ({
    __proto__: dart.getMethods(ProfilePage.SocialInfo.__proto__),
    socialMediaWidgets: dart.fnType(core.List$(framework.Widget), []),
    copyRightText: dart.fnType(framework.Widget, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.SocialInfo, "package:portfolio/ProfilePage.dart");
  dart.trackLibraries("packages/portfolio/ProfilePage", {
    "package:portfolio/ProfilePage.dart": ProfilePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ProfilePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AAEpB,YAAO,0DAEO,4CACa,6BAChB,mCACK,sBACa,8FAGC,iDAAc,OAAO,KAC5C,8BAEO,8DAIL,sBACE,qCACO,oBACM;oBACL,AAAO,mBAAK,+CAA+C;2FAGpE,qCACQ,mBACO;oBACN,AAAO,mBAAK,gDAAgD;2FAGrE,qCACQ,sBACK;oBACN,AAAO,mBAAK,mEAAmE;kNAOzF,YAEK,+DAEE,uDAEK,gCAAkB,cACR,+BAAuC,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,aACtD,yDAEQ,yCAEwB,wCAErC,sBACC,wFACA,gCAE+C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,8DAGjD,0FACA,gCAE+C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,8DAGjD;IAWlB;;;QAjFuB;;AAAQ,2DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;IAwF3B;;;;;;UAEO;AACxB,YAAO,0DACQ,gDACyB,iDAAc,OAAO,KACjC,gCACA,yDACe;;qBAErC;AACA,2BAAsB,iDAAc,OAAO,aACzC,6BACY;;;IAKtB;;;QAjBqB;QAAU;;;AAAe,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAsBnC;AACxB,YAAO,8BACa,sBAChB,kBACE,wBACiB,YACV,0CACkB,+EAG3B,+BACS,8DAET,yDACY,gCAAkB,aACpB,YACD,iBACK,6CACM;IAK1B;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGU;;;;;;IACF;;;;;;IACM;;;;;;UAQc;AACxB,YAAO,8CACE,qCAAK,kFACA,mCACH,6CAEE,yCACa;IAE5B;;;QAfS;QACU;QACA;QACV;;IAFU;IACA;IACV;AACH,yDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmCZ;;;;;;iBAnBI;AAAY,4DACM,+EAAc,OAAO,MACL,aAAxB,AAAY,AAAK,wDAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,wDAAd,OAAO,iBAAe,uBAClB,+EAAc,OAAO,MACJ,aAAxB,AAAY,AAAK,wDAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,wDAAd,OAAO,iBAAe,kBAC9B,2DACqB,gCACjB,sCACE,mCACT,iDACE,oCAAW,iCACG,iCACT;IAGjB;UAiEqB;AACxB,YAAO,0DACQ,sCAC0B,wDACE,0CACrB,8CAAC,kBAAa,OAAO,IAAG,4FAE/B,oCACgB,0CACU,+CACnB,8CAChB,kBAAa,OAAO,IACpB,gCAC6C,aAAxB,AAAY,AAAK,0BAAd,OAAO,iBAAgB,gEAE/C;IAIR;;;;IAlFS,oBAAc,0CACoB,yCACrB,sBAClB,kBACE,0CACiB,YACV,qCAAwB,AAAI,wBAAC,mEAEtC,kBACE,oCACiB,YACV,qCACS,iCACS,iFAG3B,gCACU,iEAEV,kBACE,mDACA,iEACU,uBACO,YACV,qCAAwB,oFAEjC,gCACU,iEAEV,sCACuC,8CACnB,sBAChB,2CACS,+CACA,kBAAK,6EACE,8BACH;gBACJ,AAAO,mBAAK,6BAA6B;yCAE5B,+BAAI,kEAE1B,+BACS,iEAET,kDACc,mCACI,4BAET,+CACA,kBAAK,8EACE,8BACH;gBACJ,AAAO,mBAAK,4BAA4B;yCAE3B,+BAAI;;;EA6BpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAKI,YAAO,uBACL,qCACQ,qBACK;YACJ,AAAO,mBAAK,+BAA+B;mCAEpC,+EAEhB,qCACQ,uBACK;YACJ,AAAO,mBAAK,+CAA+C;mCAEpD,+EAGhB,qCACQ,4BACK;YACJ,AAAO,mBAAK,iDAAiD;mCAEtD,+EAGhB,qCACQ,sBACK;YACJ,AAAO,mBAAK,oCAAoC;mCAEzC;IAIpB;;AAE0B,+BACpB,kCACqB,4BACd,qCACS;IAEjB;UAGqB;AACxB,YAAO,0DACQ,sCAC0B,+CACnB,sBAChB,sCACuC,wCAC3B,sFAEZ,gGAGS,0CAC4B;;0BAElC;;qBACH;;;IAIR;;;;;;EACF","file":"ProfilePage.ddc.js"}');
  // Exports:
  return {
    ProfilePage: ProfilePage
  };
});

//# sourceMappingURL=ProfilePage.ddc.js.map
