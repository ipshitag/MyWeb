define(['dart_sdk', 'packages/portfolio/responsive_widget', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, responsive_widget, material, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const responsive_widget$ = responsive_widget.responsive_widget;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__drawer = material.src__material__drawer;
  const src__material__outline_button = material.src__material__outline_button;
  const src__material__raised_button = material.src__material__raised_button;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__borders = animation.src__painting__borders;
  const src__painting__stadium_border = animation.src__painting__stadium_border;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__image_resolution = animation$.src__painting__image_resolution;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const ui$ = ui.ui;
  const ProfilePage = Object.create(dart.library);
  const $open = dartx.open;
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  ProfilePage.ProfilePage = class ProfilePage$ extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.black, appBar: new src__material__app_bar.AppBar.new({elevation: 0.0, backgroundColor: src__material__colors.Colors.black, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 14, name: "elevation"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 14, name: "backgroundColor"})))], src__widgets__widget_inspector._Location))})))}), drawer: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? new src__material__drawer.Drawer.new({child: new src__widgets__scroll_view.ListView.new({padding: const$3 || (const$3 = dart.const(new src__painting__edge_insets.EdgeInsets.all(20.0))), children: JSArrayOfWidget().of([new ProfilePage.NavButton.new({text: "about", onPressed: dart.fn(() => {
                    html.window[$open]("https://www.linkedin.com/in/ipshitaghosh13/", "IG");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 21, name: "text"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 22, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.NavButton.new({text: "work", onPressed: dart.fn(() => {
                    html.window[$open]("https://github.com/ipshitag?tab=repositories", "IG");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 19, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 21, name: "text"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.NavButton.new({text: "contact", onPressed: dart.fn(() => {
                    html.window[$open]("mailto:iuippi3@gmail.com", "IG");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 19, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 21, name: "text"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 21, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 23, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 18, name: "padding"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 18, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 16, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 16, name: "child"})))], src__widgets__widget_inspector._Location))})))}) : null, body: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__implicit_animations.AnimatedPadding.new({duration: new core.Duration.new({seconds: 1}), padding: new src__painting__edge_insets.EdgeInsets.all(dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1), child: new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new ProfilePage.NavHeader.new({$creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$23 || (const$23 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.ProfileInfo.new({$creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$28 || (const$28 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.2, $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 25, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.SocialInfo.new({$creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$33 || (const$33 = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 33, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 20, name: "mainAxisAlignment"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 20, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 25, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 20, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 23, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 18, name: "duration"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 18, name: "padding"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 18, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 21, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 16, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 23, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, name: "backgroundColor"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, name: "appBar"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 14, name: "drawer"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 14, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 16, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 10, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))});
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.ProfilePage, "package:portfolio/ProfilePage.dart");
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  ProfilePage.NavHeader = class NavHeader extends src__widgets__framework.StatelessWidget {
    get navButtons() {
      return this[navButtons$];
    }
    set navButtons(value) {
      super.navButtons = value;
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? src__rendering__flex.MainAxisAlignment.center : src__rendering__flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new ProfilePage.IGDot.new({$creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$59 || (const$59 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
            if (!dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context))) t0[$add](new src__widgets__basic.Row.new({children: this.navButtons, $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 13, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 9, name: "mainAxisAlignment"}))), const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 9, name: "crossAxisAlignment"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 12, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$70 || (const$70 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 7, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))});
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.NavHeader, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.NavHeader, () => ({
    __proto__: dart.getFields(ProfilePage.NavHeader.__proto__),
    navButtons: dart.finalFieldType(core.List$(src__widgets__framework.Widget))
  }));
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  ProfilePage.IGDot = class IGDot extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("IG", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 9, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 11, name: "data"}))), const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 11, name: "textScaleFactor"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 9, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 11, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({seconds: 1}), height: 8.0, width: 8.0, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 9, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 11, name: "duration"}))), const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 11, name: "height"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 11, name: "width"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 11, name: "decoration"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 12, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.IGDot, "package:portfolio/ProfilePage.dart");
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  ProfilePage.NavButton = class NavButton extends src__widgets__framework.StatelessWidget {
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
      return new src__material__outline_button.OutlineButton.new({child: new src__widgets__text.Text.new(core.String._check(this.text), {$creationLocationd_0dea112b090073317d4: const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 14, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$90 || (const$90 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 19, name: "data"})))], src__widgets__widget_inspector._Location))})))}), borderSide: new src__painting__borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), highlightedBorderColor: this.color, $creationLocationd_0dea112b090073317d4: const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 12, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$96 || (const$96 = dart.constList([const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 7, name: "child"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 7, name: "borderSide"}))), const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 7, name: "onPressed"}))), const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 7, name: "highlightedBorderColor"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (ProfilePage.NavButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.blue;
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.NavButton, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.NavButton, () => ({
    __proto__: dart.getFields(ProfilePage.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui$.Color)
  }));
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  ProfilePage.ProfileInfo = class ProfileInfo extends src__widgets__framework.StatelessWidget {
    get profileData() {
      return this[profileData];
    }
    set profileData(value) {
      super.profileData = value;
    }
    profileImage(context) {
      return new src__widgets__container.Container.new({height: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, width: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, decoration: new src__painting__box_decoration.BoxDecoration.new({backgroundBlendMode: ui$.BlendMode.luminosity, color: src__material__colors.Colors.lightBlueAccent, shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_resolution.AssetImage.new("ipshitaImage.jpeg"), alignment: src__painting__alignment.Alignment.center, fit: src__painting__box_fit.BoxFit.cover})}), $creationLocationd_0dea112b090073317d4: const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 28, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$155 || (const$155 = dart.constList([const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 9, name: "height"}))), const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 9, name: "width"}))), const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 9, name: "decoration"})))], src__widgets__widget_inspector._Location))})))});
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), this.profileData]), $creationLocationd_0dea112b090073317d4: const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 253, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$160 || (const$160 = dart.constList([const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 254, column: 9, name: "mainAxisAlignment"}))), const$158 || (const$158 = dart.const(new src__widgets__widget_inspector._Location.new({line: 255, column: 9, name: "crossAxisAlignment"}))), const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 256, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), smallScreen: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.max, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$163 || (const$163 = dart.constList([const$162 || (const$162 = dart.const(new src__widgets__widget_inspector._Location.new({line: 264, column: 13, name: "height"})))], src__widgets__widget_inspector._Location))})))}), this.profileData]), $creationLocationd_0dea112b090073317d4: const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 258, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$168 || (const$168 = dart.constList([const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 259, column: 9, name: "mainAxisSize"}))), const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 260, column: 9, name: "mainAxisAlignment"}))), const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 261, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 12, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$172 || (const$172 = dart.constList([const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 253, column: 7, name: "largeScreen"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 258, column: 7, name: "smallScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (ProfilePage.ProfileInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[profileData] = new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Hi there! My name is", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blue._get(800)}), $creationLocationd_0dea112b090073317d4: const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 191, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$101 || (const$101 = dart.constList([const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 192, column: 9, name: "data"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 9, name: "textScaleFactor"}))), const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Ipshita\nGhosh", {textScaleFactor: 5.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$106 || (const$106 = dart.constList([const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 197, column: 9, name: "data"}))), const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 198, column: 9, name: "textScaleFactor"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 199, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$109 || (const$109 = dart.constList([const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("A 'developing' developer, who loves to code.\n" + "I also work hard in keeping my github all green.\n", {softWrap: true, textScaleFactor: 1.5, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white70}), $creationLocationd_0dea112b090073317d4: const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$115 || (const$115 = dart.constList([const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 11, name: "data"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 9, name: "softWrap"}))), const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 9, name: "textScaleFactor"}))), const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 214, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$118 || (const$118 = dart.constList([const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 215, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__material__raised_button.RaisedButton.new({shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Resume", {$creationLocationd_0dea112b090073317d4: const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$121 || (const$121 = dart.constList([const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("https://docdro.id/ebAmRmR", "IG");
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$128 || (const$128 = dart.constList([const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 13, name: "shape"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 13, name: "child"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 223, column: 13, name: "color"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 224, column: 13, name: "onPressed"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 227, column: 13, name: "padding"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 229, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$131 || (const$131 = dart.constList([const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 230, column: 13, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__material__outline_button.OutlineButton.new({borderSide: new src__painting__borders.BorderSide.new({color: src__material__colors.Colors.red}), shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Say Hi!", {$creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$134 || (const$134 = dart.constList([const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
                html.window[$open]("mailto:iuippi3@gmail.com", "IG");
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 232, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$142 || (const$142 = dart.constList([const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 13, name: "borderSide"}))), const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 13, name: "shape"}))), const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 13, name: "child"}))), const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 13, name: "color"}))), const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 13, name: "onPressed"}))), const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 13, name: "padding"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 217, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 218, column: 9, name: "mainAxisAlignment"}))), const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 26, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$150 || (const$150 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 7, name: "crossAxisAlignment"}))), const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 190, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    ProfilePage.ProfileInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ProfilePage.ProfileInfo.prototype;
  dart.addTypeTests(ProfilePage.ProfileInfo);
  const profileData = Symbol("ProfileInfo.profileData");
  dart.setMethodSignature(ProfilePage.ProfileInfo, () => ({
    __proto__: dart.getMethods(ProfilePage.ProfileInfo.__proto__),
    profileImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.ProfileInfo, "package:portfolio/ProfilePage.dart");
  dart.setFieldSignature(ProfilePage.ProfileInfo, () => ({
    __proto__: dart.getFields(ProfilePage.ProfileInfo.__proto__),
    profileData: dart.finalFieldType(src__widgets__basic.Column)
  }));
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  ProfilePage.SocialInfo = class SocialInfo extends src__widgets__framework.StatelessWidget {
    socialMediaWidgets() {
      return JSArrayOfWidget().of([new ProfilePage.NavButton.new({text: "Github", onPressed: dart.fn(() => {
            html.window[$open]("https://github.com/ipshitag", "Git");
          }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$177 || (const$177 = dart.constList([const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 278, column: 9, name: "text"}))), const$175 || (const$175 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 9, name: "onPressed"}))), const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 282, column: 9, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.NavButton.new({text: "Instagram", onPressed: dart.fn(() => {
            html.window[$open]("https://twitter.com/imthepk", "Twitter");
          }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 284, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$182 || (const$182 = dart.constList([const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 9, name: "text"}))), const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 9, name: "onPressed"}))), const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 289, column: 9, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new ProfilePage.NavButton.new({text: "Facebook", onPressed: dart.fn(() => {
            html.window[$open]("https://facebook.com/thepawankumaar", "Fb");
          }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 291, column: 7, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$187 || (const$187 = dart.constList([const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 292, column: 9, name: "text"}))), const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 293, column: 9, name: "onPressed"}))), const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 9, name: "color"})))], src__widgets__widget_inspector._Location))})))})]);
    }
    copyRightText() {
      return new src__widgets__text.Text.new("Pawan Kumar ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 29, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$192 || (const$192 = dart.constList([const$189 || (const$189 = dart.const(new src__widgets__widget_inspector._Location.new({line: 302, column: 9, name: "data"}))), const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 303, column: 9, name: "textAlign"}))), const$191 || (const$191 = dart.const(new src__widgets__widget_inspector._Location.new({line: 304, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))});
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: this.socialMediaWidgets(), $creationLocationd_0dea112b090073317d4: const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 315, column: 11, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$196 || (const$196 = dart.constList([const$194 || (const$194 = dart.const(new src__widgets__widget_inspector._Location.new({line: 316, column: 13, name: "mainAxisAlignment"}))), const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 317, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), this.copyRightText()]), $creationLocationd_0dea112b090073317d4: const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 312, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$200 || (const$200 = dart.constList([const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 313, column: 9, name: "mainAxisAlignment"}))), const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 314, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), smallScreen: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: (() => {
            let t1 = JSArrayOfWidget().of([]);
            for (let t2 of this.socialMediaWidgets())
              t1[$add](t2);
            t1[$add](this.copyRightText());
            return t1;
          })(), $creationLocationd_0dea112b090073317d4: const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 322, column: 20, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$204 || (const$204 = dart.constList([const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 323, column: 9, name: "crossAxisAlignment"}))), const$203 || (const$203 = dart.const(new src__widgets__widget_inspector._Location.new({line: 324, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$209 || (const$209 = dart.const(new src__widgets__widget_inspector._Location.new({line: 311, column: 12, file: "org-dartlang-app:///packages/portfolio/ProfilePage.dart", parameterLocations: const$208 || (const$208 = dart.constList([const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 312, column: 7, name: "largeScreen"}))), const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 322, column: 7, name: "smallScreen"})))], src__widgets__widget_inspector._Location))})))});
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
    socialMediaWidgets: dart.fnType(core.List$(src__widgets__framework.Widget), []),
    copyRightText: dart.fnType(src__widgets__framework.Widget, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(ProfilePage.SocialInfo, "package:portfolio/ProfilePage.dart");
  dart.trackLibraries("packages/portfolio/ProfilePage", {
    "package:portfolio/ProfilePage.dart": ProfilePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/portfolio/ProfilePage.dart"],"names":[],"mappings":"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","file":"ProfilePage.ddc.js"}');
  // Exports:
  return {
    ProfilePage: ProfilePage
  };
});

//# sourceMappingURL=ProfilePage.ddc.js.map
