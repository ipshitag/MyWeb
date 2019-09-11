define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io'], function(dart_sdk, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__flutter_web__io) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter_web__src__foundation__assertions.src__foundation__diagnostics;
  const assertions = packages__flutter_web__src__foundation__assertions.src__foundation__assertions;
  const serialization = packages__flutter_web__src__foundation__assertions.src__foundation__serialization;
  const ui = packages__flutter_web_ui__ui.ui;
  const io = packages__flutter_web__io.io;
  const keyboard_maps = Object.create(dart.library);
  const keyboard_key = Object.create(dart.library);
  const platform_channel = Object.create(dart.library);
  const platform_messages = Object.create(dart.library);
  const message_codecs = Object.create(dart.library);
  const message_codec = Object.create(dart.library);
  const system_navigator = Object.create(dart.library);
  const system_channels = Object.create(dart.library);
  const text_editing = Object.create(dart.library);
  const text_input = Object.create(dart.library);
  const system_chrome = Object.create(dart.library);
  const system_sound = Object.create(dart.library);
  const raw_keyboard = Object.create(dart.library);
  const raw_keyboard_linux = Object.create(dart.library);
  const raw_keyboard_macos = Object.create(dart.library);
  const raw_keyboard_fuchsia = Object.create(dart.library);
  const raw_keyboard_android = Object.create(dart.library);
  const platform_views = Object.create(dart.library);
  const text_formatter = Object.create(dart.library);
  const haptic_feedback = Object.create(dart.library);
  const clipboard = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $runtimeType = dartx.runtimeType;
  const $_get = dartx._get;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $codeUnitAt = dartx.codeUnitAt;
  const $cast = dartx.cast;
  const $toString = dartx.toString;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $buffer = dartx.buffer;
  const $offsetInBytes = dartx.offsetInBytes;
  const $lengthInBytes = dartx.lengthInBytes;
  const $asUint8List = dartx.asUint8List;
  const $asByteData = dartx.asByteData;
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  const $substring = dartx.substring;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $toUpperCase = dartx.toUpperCase;
  const $isNotEmpty = dartx.isNotEmpty;
  const $containsKey = dartx.containsKey;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $clear = dartx.clear;
  const $replaceAll = dartx.replaceAll;
  const $runes = dartx.runes;
  const $allMatches = dartx.allMatches;
  const $join = dartx.join;
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let ByteDataToFutureOfByteData = () => (ByteDataToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [typed_data.ByteData])))();
  let FutureOrOfByteData = () => (FutureOrOfByteData = dart.constFn(async.FutureOr$(typed_data.ByteData)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let CompleterOfByteData = () => (CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let IdentityMapOfString$ByteDataToFutureOfByteData = () => (IdentityMapOfString$ByteDataToFutureOfByteData = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataToFutureOfByteData())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let BasicMessageChannelOfString = () => (BasicMessageChannelOfString = dart.constFn(platform_channel.BasicMessageChannel$(core.String)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)))();
  let RawKeyEventTovoid = () => (RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])))();
  let JSArrayOfRawKeyEventTovoid = () => (JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(RawKeyEventTovoid())))();
  let LinkedHashSetOfLogicalKeyboardKey = () => (LinkedHashSetOfLogicalKeyboardKey = dart.constFn(collection.LinkedHashSet$(keyboard_key.LogicalKeyboardKey)))();
  let ListOfRawKeyEventTovoid = () => (ListOfRawKeyEventTovoid = dart.constFn(core.List$(RawKeyEventTovoid())))();
  let intAndintToKeyboardSide = () => (intAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int])))();
  let intAndintAndintToKeyboardSide = () => (intAndintAndintToKeyboardSide = dart.constFn(dart.fnType(raw_keyboard.KeyboardSide, [core.int, core.int, core.int])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let IdentityMapOfint$VoidTovoid = () => (IdentityMapOfint$VoidTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, VoidTovoid())))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let AndroidPointerPropertiesToListOfint = () => (AndroidPointerPropertiesToListOfint = dart.constFn(dart.fnType(ListOfint(), [platform_views.AndroidPointerProperties])))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let AndroidPointerCoordsToListOfdouble = () => (AndroidPointerCoordsToListOfdouble = dart.constFn(dart.fnType(ListOfdouble(), [platform_views.AndroidPointerCoords])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let JSArrayOfintTovoid = () => (JSArrayOfintTovoid = dart.constFn(_interceptors.JSArray$(intTovoid())))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "None",
        keyId: 4294967296.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Fn",
        keyId: 4294967314.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Sleep",
        keyId: 4295032962.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Wake Up",
        keyId: 4295032963.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "a",
        debugName: "Key A",
        keyId: 97
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "b",
        debugName: "Key B",
        keyId: 98
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "c",
        debugName: "Key C",
        keyId: 99
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "d",
        debugName: "Key D",
        keyId: 100
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "e",
        debugName: "Key E",
        keyId: 101
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "f",
        debugName: "Key F",
        keyId: 102
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "g",
        debugName: "Key G",
        keyId: 103
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "h",
        debugName: "Key H",
        keyId: 104
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "i",
        debugName: "Key I",
        keyId: 105
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "j",
        debugName: "Key J",
        keyId: 106
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "k",
        debugName: "Key K",
        keyId: 107
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "l",
        debugName: "Key L",
        keyId: 108
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "m",
        debugName: "Key M",
        keyId: 109
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "n",
        debugName: "Key N",
        keyId: 110
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "o",
        debugName: "Key O",
        keyId: 111
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "p",
        debugName: "Key P",
        keyId: 112
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "q",
        debugName: "Key Q",
        keyId: 113
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "r",
        debugName: "Key R",
        keyId: 114
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "s",
        debugName: "Key S",
        keyId: 115
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "t",
        debugName: "Key T",
        keyId: 116
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "u",
        debugName: "Key U",
        keyId: 117
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "v",
        debugName: "Key V",
        keyId: 118
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "w",
        debugName: "Key W",
        keyId: 119
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "x",
        debugName: "Key X",
        keyId: 120
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "y",
        debugName: "Key Y",
        keyId: 121
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "z",
        debugName: "Key Z",
        keyId: 122
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "1",
        debugName: "Digit 1",
        keyId: 49
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "2",
        debugName: "Digit 2",
        keyId: 50
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "3",
        debugName: "Digit 3",
        keyId: 51
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "4",
        debugName: "Digit 4",
        keyId: 52
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "5",
        debugName: "Digit 5",
        keyId: 53
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "6",
        debugName: "Digit 6",
        keyId: 54
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "7",
        debugName: "Digit 7",
        keyId: 55
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "8",
        debugName: "Digit 8",
        keyId: 56
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "9",
        debugName: "Digit 9",
        keyId: 57
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "0",
        debugName: "Digit 0",
        keyId: 48
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Enter",
        keyId: 4295426088.0
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Escape",
        keyId: 4295426089.0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Backspace",
        keyId: 4295426090.0
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Tab",
        keyId: 4295426091.0
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: " ",
        debugName: "Space",
        keyId: 32
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "-",
        debugName: "Minus",
        keyId: 45
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "=",
        debugName: "Equal",
        keyId: 61
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "[",
        debugName: "Bracket Left",
        keyId: 91
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "]",
        debugName: "Bracket Right",
        keyId: 93
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "\\",
        debugName: "Backslash",
        keyId: 92
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ";",
        debugName: "Semicolon",
        keyId: 59
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "'",
        debugName: "Quote",
        keyId: 39
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "`",
        debugName: "Backquote",
        keyId: 96
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ",",
        debugName: "Comma",
        keyId: 44
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ".",
        debugName: "Period",
        keyId: 46
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "/",
        debugName: "Slash",
        keyId: 47
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Caps Lock",
        keyId: 4295426105.0
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F1",
        keyId: 4295426106.0
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F2",
        keyId: 4295426107.0
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F3",
        keyId: 4295426108.0
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F4",
        keyId: 4295426109.0
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F5",
        keyId: 4295426110.0
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F6",
        keyId: 4295426111.0
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F7",
        keyId: 4295426112.0
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F8",
        keyId: 4295426113.0
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F9",
        keyId: 4295426114.0
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F10",
        keyId: 4295426115.0
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F11",
        keyId: 4295426116.0
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F12",
        keyId: 4295426117.0
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Print Screen",
        keyId: 4295426118.0
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Scroll Lock",
        keyId: 4295426119.0
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Pause",
        keyId: 4295426120.0
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Insert",
        keyId: 4295426121.0
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Home",
        keyId: 4295426122.0
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Page Up",
        keyId: 4295426123.0
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Delete",
        keyId: 4295426124.0
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "End",
        keyId: 4295426125.0
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Page Down",
        keyId: 4295426126.0
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Right",
        keyId: 4295426127.0
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Left",
        keyId: 4295426128.0
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Down",
        keyId: 4295426129.0
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Arrow Up",
        keyId: 4295426130.0
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Num Lock",
        keyId: 4295426131.0
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "/",
        debugName: "Numpad Divide",
        keyId: 4295426132.0
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "*",
        debugName: "Numpad Multiply",
        keyId: 4295426133.0
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "-",
        debugName: "Numpad Subtract",
        keyId: 4295426134.0
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "+",
        debugName: "Numpad Add",
        keyId: 4295426135.0
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Enter",
        keyId: 4295426136.0
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "1",
        debugName: "Numpad 1",
        keyId: 4295426137.0
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "2",
        debugName: "Numpad 2",
        keyId: 4295426138.0
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "3",
        debugName: "Numpad 3",
        keyId: 4295426139.0
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "4",
        debugName: "Numpad 4",
        keyId: 4295426140.0
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "5",
        debugName: "Numpad 5",
        keyId: 4295426141.0
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "6",
        debugName: "Numpad 6",
        keyId: 4295426142.0
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "7",
        debugName: "Numpad 7",
        keyId: 4295426143.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "8",
        debugName: "Numpad 8",
        keyId: 4295426144.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "9",
        debugName: "Numpad 9",
        keyId: 4295426145.0
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "0",
        debugName: "Numpad 0",
        keyId: 4295426146.0
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ".",
        debugName: "Numpad Decimal",
        keyId: 4295426147.0
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Context Menu",
        keyId: 4295426149.0
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Power",
        keyId: 4295426150.0
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "=",
        debugName: "Numpad Equal",
        keyId: 4295426151.0
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Help",
        keyId: 4295426165.0
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Cut",
        keyId: 4295426171.0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Copy",
        keyId: 4295426172.0
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Paste",
        keyId: 4295426173.0
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Mute",
        keyId: 4295426175.0
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Up",
        keyId: 4295426176.0
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Audio Volume Down",
        keyId: 4295426177.0
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ",",
        debugName: "Numpad Comma",
        keyId: 4295426181.0
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Convert",
        keyId: 4295426186.0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Non Convert",
        keyId: 4295426187.0
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: "(",
        debugName: "Numpad Paren Left",
        keyId: 4295426230.0
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: ")",
        debugName: "Numpad Paren Right",
        keyId: 4295426231.0
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Control Left",
        keyId: 4295426272.0
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Shift Left",
        keyId: 4295426273.0
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Alt Left",
        keyId: 4295426274.0
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Meta Left",
        keyId: 4295426275.0
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Control Right",
        keyId: 4295426276.0
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Shift Right",
        keyId: 4295426277.0
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Alt Right",
        keyId: 4295426278.0
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Meta Right",
        keyId: 4295426279.0
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Info",
        keyId: 4295753824.0
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Closed Caption Toggle",
        keyId: 4295753825.0
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Up",
        keyId: 4295753839.0
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Down",
        keyId: 4295753840.0
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Last",
        keyId: 4295753859.0
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Channel Up",
        keyId: 4295753884.0
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Channel Down",
        keyId: 4295753885.0
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Play",
        keyId: 4295753904.0
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Record",
        keyId: 4295753906.0
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Fast Forward",
        keyId: 4295753907.0
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Rewind",
        keyId: 4295753908.0
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Track Next",
        keyId: 4295753909.0
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Track Previous",
        keyId: 4295753910.0
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Stop",
        keyId: 4295753911.0
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Eject",
        keyId: 4295753912.0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Play Pause",
        keyId: 4295753933.0
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Mail",
        keyId: 4295754122.0
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Contacts",
        keyId: 4295754125.0
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Calendar",
        keyId: 4295754126.0
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Assistant",
        keyId: 4295754187.0
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Close",
        keyId: 4295754243.0
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Search",
        keyId: 4295754273.0
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Forward",
        keyId: 4295754277.0
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Favorites",
        keyId: 4295754282.0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom In",
        keyId: 4295754285.0
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom Out",
        keyId: 4295754286.0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Zoom Toggle",
        keyId: 4295754290.0
      });
    },
    get C0() {
      return C0 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [0, C1 || CT.C1, 119, C2 || CT.C2, 223, C3 || CT.C3, 224, C4 || CT.C4, 29, C5 || CT.C5, 30, C6 || CT.C6, 31, C7 || CT.C7, 32, C8 || CT.C8, 33, C9 || CT.C9, 34, C10 || CT.C10, 35, C11 || CT.C11, 36, C12 || CT.C12, 37, C13 || CT.C13, 38, C14 || CT.C14, 39, C15 || CT.C15, 40, C16 || CT.C16, 41, C17 || CT.C17, 42, C18 || CT.C18, 43, C19 || CT.C19, 44, C20 || CT.C20, 45, C21 || CT.C21, 46, C22 || CT.C22, 47, C23 || CT.C23, 48, C24 || CT.C24, 49, C25 || CT.C25, 50, C26 || CT.C26, 51, C27 || CT.C27, 52, C28 || CT.C28, 53, C29 || CT.C29, 54, C30 || CT.C30, 8, C31 || CT.C31, 9, C32 || CT.C32, 10, C33 || CT.C33, 11, C34 || CT.C34, 12, C35 || CT.C35, 13, C36 || CT.C36, 14, C37 || CT.C37, 15, C38 || CT.C38, 16, C39 || CT.C39, 7, C40 || CT.C40, 66, C41 || CT.C41, 111, C42 || CT.C42, 67, C43 || CT.C43, 61, C44 || CT.C44, 62, C45 || CT.C45, 69, C46 || CT.C46, 70, C47 || CT.C47, 71, C48 || CT.C48, 72, C49 || CT.C49, 73, C50 || CT.C50, 74, C51 || CT.C51, 75, C52 || CT.C52, 68, C53 || CT.C53, 55, C54 || CT.C54, 56, C55 || CT.C55, 76, C56 || CT.C56, 115, C57 || CT.C57, 131, C58 || CT.C58, 132, C59 || CT.C59, 133, C60 || CT.C60, 134, C61 || CT.C61, 135, C62 || CT.C62, 136, C63 || CT.C63, 137, C64 || CT.C64, 138, C65 || CT.C65, 139, C66 || CT.C66, 140, C67 || CT.C67, 141, C68 || CT.C68, 142, C69 || CT.C69, 120, C70 || CT.C70, 116, C71 || CT.C71, 121, C72 || CT.C72, 124, C73 || CT.C73, 122, C74 || CT.C74, 92, C75 || CT.C75, 112, C76 || CT.C76, 123, C77 || CT.C77, 93, C78 || CT.C78, 22, C79 || CT.C79, 21, C80 || CT.C80, 20, C81 || CT.C81, 19, C82 || CT.C82, 143, C83 || CT.C83, 154, C84 || CT.C84, 155, C85 || CT.C85, 156, C86 || CT.C86, 157, C87 || CT.C87, 160, C88 || CT.C88, 145, C89 || CT.C89, 146, C90 || CT.C90, 147, C91 || CT.C91, 148, C92 || CT.C92, 149, C93 || CT.C93, 150, C94 || CT.C94, 151, C95 || CT.C95, 152, C96 || CT.C96, 153, C97 || CT.C97, 144, C98 || CT.C98, 158, C99 || CT.C99, 82, C100 || CT.C100, 26, C101 || CT.C101, 161, C102 || CT.C102, 259, C103 || CT.C103, 277, C104 || CT.C104, 278, C105 || CT.C105, 279, C106 || CT.C106, 164, C107 || CT.C107, 24, C108 || CT.C108, 25, C109 || CT.C109, 159, C110 || CT.C110, 214, C111 || CT.C111, 213, C112 || CT.C112, 162, C113 || CT.C113, 163, C114 || CT.C114, 113, C115 || CT.C115, 59, C116 || CT.C116, 57, C117 || CT.C117, 117, C118 || CT.C118, 114, C119 || CT.C119, 60, C120 || CT.C120, 58, C121 || CT.C121, 118, C122 || CT.C122, 165, C123 || CT.C123, 175, C124 || CT.C124, 221, C125 || CT.C125, 220, C126 || CT.C126, 229, C127 || CT.C127, 166, C128 || CT.C128, 167, C129 || CT.C129, 126, C130 || CT.C130, 130, C131 || CT.C131, 90, C132 || CT.C132, 89, C133 || CT.C133, 87, C134 || CT.C134, 88, C135 || CT.C135, 86, C136 || CT.C136, 129, C137 || CT.C137, 85, C138 || CT.C138, 65, C139 || CT.C139, 207, C140 || CT.C140, 208, C141 || CT.C141, 219, C142 || CT.C142, 128, C143 || CT.C143, 84, C144 || CT.C144, 125, C145 || CT.C145, 174, C146 || CT.C146, 168, C147 || CT.C147, 169, C148 || CT.C148, 255, C149 || CT.C149]);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Fn",
        usbHidUsage: 18
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Suspend",
        usbHidUsage: 20
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Sleep",
        usbHidUsage: 65666
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Wake Up",
        usbHidUsage: 65667
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key A",
        usbHidUsage: 458756
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key B",
        usbHidUsage: 458757
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key C",
        usbHidUsage: 458758
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key D",
        usbHidUsage: 458759
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key E",
        usbHidUsage: 458760
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key F",
        usbHidUsage: 458761
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key G",
        usbHidUsage: 458762
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key H",
        usbHidUsage: 458763
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key I",
        usbHidUsage: 458764
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key J",
        usbHidUsage: 458765
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key K",
        usbHidUsage: 458766
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key L",
        usbHidUsage: 458767
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key M",
        usbHidUsage: 458768
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key N",
        usbHidUsage: 458769
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key O",
        usbHidUsage: 458770
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key P",
        usbHidUsage: 458771
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Q",
        usbHidUsage: 458772
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key R",
        usbHidUsage: 458773
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key S",
        usbHidUsage: 458774
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key T",
        usbHidUsage: 458775
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key U",
        usbHidUsage: 458776
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key V",
        usbHidUsage: 458777
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key W",
        usbHidUsage: 458778
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key X",
        usbHidUsage: 458779
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Y",
        usbHidUsage: 458780
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Key Z",
        usbHidUsage: 458781
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 1",
        usbHidUsage: 458782
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 2",
        usbHidUsage: 458783
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 3",
        usbHidUsage: 458784
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 4",
        usbHidUsage: 458785
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 5",
        usbHidUsage: 458786
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 6",
        usbHidUsage: 458787
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 7",
        usbHidUsage: 458788
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 8",
        usbHidUsage: 458789
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 9",
        usbHidUsage: 458790
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Digit 0",
        usbHidUsage: 458791
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Enter",
        usbHidUsage: 458792
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Escape",
        usbHidUsage: 458793
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backspace",
        usbHidUsage: 458794
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Tab",
        usbHidUsage: 458795
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Space",
        usbHidUsage: 458796
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Minus",
        usbHidUsage: 458797
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Equal",
        usbHidUsage: 458798
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bracket Left",
        usbHidUsage: 458799
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bracket Right",
        usbHidUsage: 458800
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backslash",
        usbHidUsage: 458801
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Semicolon",
        usbHidUsage: 458803
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Quote",
        usbHidUsage: 458804
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Backquote",
        usbHidUsage: 458805
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Comma",
        usbHidUsage: 458806
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Period",
        usbHidUsage: 458807
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Slash",
        usbHidUsage: 458808
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Caps Lock",
        usbHidUsage: 458809
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F1",
        usbHidUsage: 458810
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F2",
        usbHidUsage: 458811
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F3",
        usbHidUsage: 458812
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F4",
        usbHidUsage: 458813
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F5",
        usbHidUsage: 458814
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F6",
        usbHidUsage: 458815
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F7",
        usbHidUsage: 458816
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F8",
        usbHidUsage: 458817
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F9",
        usbHidUsage: 458818
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F10",
        usbHidUsage: 458819
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F11",
        usbHidUsage: 458820
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F12",
        usbHidUsage: 458821
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Print Screen",
        usbHidUsage: 458822
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Scroll Lock",
        usbHidUsage: 458823
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Pause",
        usbHidUsage: 458824
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Insert",
        usbHidUsage: 458825
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Home",
        usbHidUsage: 458826
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Page Up",
        usbHidUsage: 458827
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Delete",
        usbHidUsage: 458828
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "End",
        usbHidUsage: 458829
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Page Down",
        usbHidUsage: 458830
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Right",
        usbHidUsage: 458831
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Left",
        usbHidUsage: 458832
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Down",
        usbHidUsage: 458833
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Arrow Up",
        usbHidUsage: 458834
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Num Lock",
        usbHidUsage: 458835
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Divide",
        usbHidUsage: 458836
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Multiply",
        usbHidUsage: 458837
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Subtract",
        usbHidUsage: 458838
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Add",
        usbHidUsage: 458839
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Enter",
        usbHidUsage: 458840
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 1",
        usbHidUsage: 458841
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 2",
        usbHidUsage: 458842
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 3",
        usbHidUsage: 458843
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 4",
        usbHidUsage: 458844
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 5",
        usbHidUsage: 458845
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 6",
        usbHidUsage: 458846
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 7",
        usbHidUsage: 458847
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 8",
        usbHidUsage: 458848
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 9",
        usbHidUsage: 458849
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad 0",
        usbHidUsage: 458850
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Decimal",
        usbHidUsage: 458851
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Context Menu",
        usbHidUsage: 458853
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Power",
        usbHidUsage: 458854
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Equal",
        usbHidUsage: 458855
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F13",
        usbHidUsage: 458856
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F14",
        usbHidUsage: 458857
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F15",
        usbHidUsage: 458858
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F16",
        usbHidUsage: 458859
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F17",
        usbHidUsage: 458860
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F18",
        usbHidUsage: 458861
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F19",
        usbHidUsage: 458862
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F20",
        usbHidUsage: 458863
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F21",
        usbHidUsage: 458864
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F22",
        usbHidUsage: 458865
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F23",
        usbHidUsage: 458866
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "F24",
        usbHidUsage: 458867
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Open",
        usbHidUsage: 458868
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Help",
        usbHidUsage: 458869
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Again",
        usbHidUsage: 458873
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Undo",
        usbHidUsage: 458874
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Cut",
        usbHidUsage: 458875
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Copy",
        usbHidUsage: 458876
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Paste",
        usbHidUsage: 458877
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Find",
        usbHidUsage: 458878
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Mute",
        usbHidUsage: 458879
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Up",
        usbHidUsage: 458880
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Audio Volume Down",
        usbHidUsage: 458881
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Comma",
        usbHidUsage: 458885
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Convert",
        usbHidUsage: 458890
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Non Convert",
        usbHidUsage: 458891
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 3",
        usbHidUsage: 458898
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 4",
        usbHidUsage: 458899
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Props",
        usbHidUsage: 458915
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Paren Left",
        usbHidUsage: 458934
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Paren Right",
        usbHidUsage: 458935
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Control Left",
        usbHidUsage: 458976
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Shift Left",
        usbHidUsage: 458977
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Alt Left",
        usbHidUsage: 458978
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Meta Left",
        usbHidUsage: 458979
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Control Right",
        usbHidUsage: 458980
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Shift Right",
        usbHidUsage: 458981
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Alt Right",
        usbHidUsage: 458982
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Meta Right",
        usbHidUsage: 458983
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Info",
        usbHidUsage: 786528
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Up",
        usbHidUsage: 786543
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Down",
        usbHidUsage: 786544
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Exit",
        usbHidUsage: 786580
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Channel Up",
        usbHidUsage: 786588
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Channel Down",
        usbHidUsage: 786589
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Play",
        usbHidUsage: 786608
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Record",
        usbHidUsage: 786610
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Fast Forward",
        usbHidUsage: 786611
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Rewind",
        usbHidUsage: 786612
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Track Next",
        usbHidUsage: 786613
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Track Previous",
        usbHidUsage: 786614
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Stop",
        usbHidUsage: 786615
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Eject",
        usbHidUsage: 786616
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Play Pause",
        usbHidUsage: 786637
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Bass Boost",
        usbHidUsage: 786661
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Mail",
        usbHidUsage: 786826
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Contacts",
        usbHidUsage: 786829
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Calendar",
        usbHidUsage: 786830
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "New Key",
        usbHidUsage: 786945
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Close",
        usbHidUsage: 786947
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Print",
        usbHidUsage: 786952
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Search",
        usbHidUsage: 786977
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Forward",
        usbHidUsage: 786981
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Favorites",
        usbHidUsage: 786986
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Redo",
        usbHidUsage: 787065
      });
    },
    get C150() {
      return C150 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [464, C151 || CT.C151, 205, C152 || CT.C152, 142, C153 || CT.C153, 143, C154 || CT.C154, 30, C155 || CT.C155, 48, C156 || CT.C156, 46, C157 || CT.C157, 32, C158 || CT.C158, 18, C159 || CT.C159, 33, C160 || CT.C160, 34, C161 || CT.C161, 35, C162 || CT.C162, 23, C163 || CT.C163, 36, C164 || CT.C164, 37, C165 || CT.C165, 38, C166 || CT.C166, 50, C167 || CT.C167, 49, C168 || CT.C168, 24, C169 || CT.C169, 25, C170 || CT.C170, 16, C171 || CT.C171, 19, C172 || CT.C172, 31, C173 || CT.C173, 20, C174 || CT.C174, 22, C175 || CT.C175, 47, C176 || CT.C176, 17, C177 || CT.C177, 45, C178 || CT.C178, 21, C179 || CT.C179, 44, C180 || CT.C180, 2, C181 || CT.C181, 3, C182 || CT.C182, 4, C183 || CT.C183, 5, C184 || CT.C184, 6, C185 || CT.C185, 7, C186 || CT.C186, 8, C187 || CT.C187, 9, C188 || CT.C188, 10, C189 || CT.C189, 11, C190 || CT.C190, 28, C191 || CT.C191, 1, C192 || CT.C192, 14, C193 || CT.C193, 15, C194 || CT.C194, 57, C195 || CT.C195, 12, C196 || CT.C196, 13, C197 || CT.C197, 26, C198 || CT.C198, 27, C199 || CT.C199, 43, C200 || CT.C200, 86, C200 || CT.C200, 39, C201 || CT.C201, 40, C202 || CT.C202, 41, C203 || CT.C203, 51, C204 || CT.C204, 52, C205 || CT.C205, 53, C206 || CT.C206, 58, C207 || CT.C207, 59, C208 || CT.C208, 60, C209 || CT.C209, 61, C210 || CT.C210, 62, C211 || CT.C211, 63, C212 || CT.C212, 64, C213 || CT.C213, 65, C214 || CT.C214, 66, C215 || CT.C215, 67, C216 || CT.C216, 68, C217 || CT.C217, 87, C218 || CT.C218, 88, C219 || CT.C219, 99, C220 || CT.C220, 70, C221 || CT.C221, 119, C222 || CT.C222, 411, C222 || CT.C222, 110, C223 || CT.C223, 102, C224 || CT.C224, 104, C225 || CT.C225, 177, C225 || CT.C225, 111, C226 || CT.C226, 107, C227 || CT.C227, 109, C228 || CT.C228, 178, C228 || CT.C228, 106, C229 || CT.C229, 105, C230 || CT.C230, 108, C231 || CT.C231, 103, C232 || CT.C232, 69, C233 || CT.C233, 98, C234 || CT.C234, 55, C235 || CT.C235, 74, C236 || CT.C236, 78, C237 || CT.C237, 96, C238 || CT.C238, 79, C239 || CT.C239, 80, C240 || CT.C240, 81, C241 || CT.C241, 75, C242 || CT.C242, 76, C243 || CT.C243, 77, C244 || CT.C244, 71, C245 || CT.C245, 72, C246 || CT.C246, 73, C247 || CT.C247, 82, C248 || CT.C248, 83, C249 || CT.C249, 127, C250 || CT.C250, 139, C250 || CT.C250, 116, C251 || CT.C251, 152, C251 || CT.C251, 117, C252 || CT.C252, 183, C253 || CT.C253, 184, C254 || CT.C254, 185, C255 || CT.C255, 186, C256 || CT.C256, 187, C257 || CT.C257, 188, C258 || CT.C258, 189, C259 || CT.C259, 190, C260 || CT.C260, 191, C261 || CT.C261, 192, C262 || CT.C262, 193, C263 || CT.C263, 194, C264 || CT.C264, 134, C265 || CT.C265, 138, C266 || CT.C266, 129, C267 || CT.C267, 131, C268 || CT.C268, 137, C269 || CT.C269, 133, C270 || CT.C270, 135, C271 || CT.C271, 136, C272 || CT.C272, 113, C273 || CT.C273, 115, C274 || CT.C274, 114, C275 || CT.C275, 95, C276 || CT.C276, 121, C276 || CT.C276, 92, C277 || CT.C277, 94, C278 || CT.C278, 90, C279 || CT.C279, 91, C280 || CT.C280, 130, C281 || CT.C281, 179, C282 || CT.C282, 180, C283 || CT.C283, 29, C284 || CT.C284, 42, C285 || CT.C285, 56, C286 || CT.C286, 125, C287 || CT.C287, 97, C288 || CT.C288, 54, C289 || CT.C289, 100, C290 || CT.C290, 126, C291 || CT.C291, 358, C292 || CT.C292, 225, C293 || CT.C293, 224, C294 || CT.C294, 174, C295 || CT.C295, 402, C296 || CT.C296, 403, C297 || CT.C297, 200, C298 || CT.C298, 207, C298 || CT.C298, 167, C299 || CT.C299, 208, C300 || CT.C300, 168, C301 || CT.C301, 163, C302 || CT.C302, 165, C303 || CT.C303, 128, C304 || CT.C304, 166, C304 || CT.C304, 161, C305 || CT.C305, 162, C305 || CT.C305, 164, C306 || CT.C306, 209, C307 || CT.C307, 155, C308 || CT.C308, 215, C308 || CT.C308, 429, C309 || CT.C309, 397, C310 || CT.C310, 181, C311 || CT.C311, 160, C312 || CT.C312, 206, C312 || CT.C312, 210, C313 || CT.C313, 217, C314 || CT.C314, 159, C315 || CT.C315, 156, C316 || CT.C316, 182, C317 || CT.C317]);
    },
    get C318() {
      return C318 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [154, C84 || CT.C84, 155, C85 || CT.C85, 156, C86 || CT.C86, 157, C87 || CT.C87, 145, C89 || CT.C89, 146, C90 || CT.C90, 147, C91 || CT.C91, 148, C92 || CT.C92, 149, C93 || CT.C93, 150, C94 || CT.C94, 151, C95 || CT.C95, 152, C96 || CT.C96, 153, C97 || CT.C97, 144, C98 || CT.C98, 158, C99 || CT.C99, 161, C102 || CT.C102, 159, C110 || CT.C110, 162, C113 || CT.C113, 163, C114 || CT.C114]);
    },
    get C320() {
      return C320 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Hyper",
        keyId: 4294967312.0
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Super Key",
        keyId: 4294967313.0
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Fn Lock",
        keyId: 4294967315.0
      });
    },
    get C323() {
      return C323 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Suspend",
        keyId: 4294967316.0
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Resume",
        keyId: 4294967317.0
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Turbo",
        keyId: 4294967318.0
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Display Toggle Int Ext",
        keyId: 4295033013.0
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Reserved",
        keyId: 4295426048.0
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Error Roll Over",
        keyId: 4295426049.0
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Post Fail",
        keyId: 4295426050.0
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Usb Error Undefined",
        keyId: 4295426051.0
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Backslash",
        keyId: 4295426148.0
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F13",
        keyId: 4295426152.0
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F14",
        keyId: 4295426153.0
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F15",
        keyId: 4295426154.0
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F16",
        keyId: 4295426155.0
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F17",
        keyId: 4295426156.0
      });
    },
    get C337() {
      return C337 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F18",
        keyId: 4295426157.0
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F19",
        keyId: 4295426158.0
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F20",
        keyId: 4295426159.0
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F21",
        keyId: 4295426160.0
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F22",
        keyId: 4295426161.0
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F23",
        keyId: 4295426162.0
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "F24",
        keyId: 4295426163.0
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Open",
        keyId: 4295426164.0
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Select",
        keyId: 4295426167.0
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Again",
        keyId: 4295426169.0
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Undo",
        keyId: 4295426170.0
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Find",
        keyId: 4295426174.0
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Ro",
        keyId: 4295426183.0
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Kana Mode",
        keyId: 4295426184.0
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Intl Yen",
        keyId: 4295426185.0
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 1",
        keyId: 4295426192.0
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 2",
        keyId: 4295426193.0
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 3",
        keyId: 4295426194.0
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 4",
        keyId: 4295426195.0
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lang 5",
        keyId: 4295426196.0
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Abort",
        keyId: 4295426203.0
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Props",
        keyId: 4295426211.0
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Backspace",
        keyId: 4295426235.0
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Store",
        keyId: 4295426256.0
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Recall",
        keyId: 4295426257.0
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Clear",
        keyId: 4295426258.0
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Add",
        keyId: 4295426259.0
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Memory Subtract",
        keyId: 4295426260.0
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Sign Change",
        keyId: 4295426263.0
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Clear",
        keyId: 4295426264.0
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Numpad Clear Entry",
        keyId: 4295426265.0
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Toggle",
        keyId: 4295753842.0
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Minimum",
        keyId: 4295753843.0
      });
    },
    get C370() {
      return C370 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Maximum",
        keyId: 4295753844.0
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Brightness Auto",
        keyId: 4295753845.0
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Phone",
        keyId: 4295753868.0
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Program Guide",
        keyId: 4295753869.0
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Exit",
        keyId: 4295753876.0
      });
    },
    get C375() {
      return C375 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Speech Input Toggle",
        keyId: 4295753935.0
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Bass Boost",
        keyId: 4295753957.0
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Media Select",
        keyId: 4295754115.0
      });
    },
    get C378() {
      return C378 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Word Processor",
        keyId: 4295754116.0
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Spreadsheet",
        keyId: 4295754118.0
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch App2",
        keyId: 4295754130.0
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch App1",
        keyId: 4295754132.0
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Internet Browser",
        keyId: 4295754134.0
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Log Off",
        keyId: 4295754140.0
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Lock Screen",
        keyId: 4295754142.0
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Control Panel",
        keyId: 4295754143.0
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Select Task",
        keyId: 4295754146.0
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Documents",
        keyId: 4295754151.0
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Spell Check",
        keyId: 4295754155.0
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Keyboard Layout",
        keyId: 4295754158.0
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Screen Saver",
        keyId: 4295754161.0
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Launch Audio Browser",
        keyId: 4295754167.0
      });
    },
    get C392() {
      return C392 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "New Key",
        keyId: 4295754241.0
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Save",
        keyId: 4295754247.0
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Print",
        keyId: 4295754248.0
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Home",
        keyId: 4295754275.0
      });
    },
    get C396() {
      return C396 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Back",
        keyId: 4295754276.0
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Stop",
        keyId: 4295754278.0
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Browser Refresh",
        keyId: 4295754279.0
      });
    },
    get C399() {
      return C399 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Redo",
        keyId: 4295754361.0
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Reply",
        keyId: 4295754377.0
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Forward",
        keyId: 4295754379.0
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Mail Send",
        keyId: 4295754380.0
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: keyboard_key.LogicalKeyboardKey.prototype,
        keyLabel: null,
        debugName: "Show All Windows",
        keyId: 4295754399.0
      });
    },
    get C319() {
      return C319 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [4294967296.0, C1 || CT.C1, 4294967312.0, C320 || CT.C320, 4294967313.0, C321 || CT.C321, 4294967314.0, C2 || CT.C2, 4294967315.0, C322 || CT.C322, 4294967316.0, C323 || CT.C323, 4294967317.0, C324 || CT.C324, 4294967318.0, C325 || CT.C325, 4295032962.0, C3 || CT.C3, 4295032963.0, C4 || CT.C4, 4295033013.0, C326 || CT.C326, 4295426048.0, C327 || CT.C327, 4295426049.0, C328 || CT.C328, 4295426050.0, C329 || CT.C329, 4295426051.0, C330 || CT.C330, 97, C5 || CT.C5, 98, C6 || CT.C6, 99, C7 || CT.C7, 100, C8 || CT.C8, 101, C9 || CT.C9, 102, C10 || CT.C10, 103, C11 || CT.C11, 104, C12 || CT.C12, 105, C13 || CT.C13, 106, C14 || CT.C14, 107, C15 || CT.C15, 108, C16 || CT.C16, 109, C17 || CT.C17, 110, C18 || CT.C18, 111, C19 || CT.C19, 112, C20 || CT.C20, 113, C21 || CT.C21, 114, C22 || CT.C22, 115, C23 || CT.C23, 116, C24 || CT.C24, 117, C25 || CT.C25, 118, C26 || CT.C26, 119, C27 || CT.C27, 120, C28 || CT.C28, 121, C29 || CT.C29, 122, C30 || CT.C30, 49, C31 || CT.C31, 50, C32 || CT.C32, 51, C33 || CT.C33, 52, C34 || CT.C34, 53, C35 || CT.C35, 54, C36 || CT.C36, 55, C37 || CT.C37, 56, C38 || CT.C38, 57, C39 || CT.C39, 48, C40 || CT.C40, 4295426088.0, C41 || CT.C41, 4295426089.0, C42 || CT.C42, 4295426090.0, C43 || CT.C43, 4295426091.0, C44 || CT.C44, 32, C45 || CT.C45, 45, C46 || CT.C46, 61, C47 || CT.C47, 91, C48 || CT.C48, 93, C49 || CT.C49, 92, C50 || CT.C50, 59, C51 || CT.C51, 39, C52 || CT.C52, 96, C53 || CT.C53, 44, C54 || CT.C54, 46, C55 || CT.C55, 47, C56 || CT.C56, 4295426105.0, C57 || CT.C57, 4295426106.0, C58 || CT.C58, 4295426107.0, C59 || CT.C59, 4295426108.0, C60 || CT.C60, 4295426109.0, C61 || CT.C61, 4295426110.0, C62 || CT.C62, 4295426111.0, C63 || CT.C63, 4295426112.0, C64 || CT.C64, 4295426113.0, C65 || CT.C65, 4295426114.0, C66 || CT.C66, 4295426115.0, C67 || CT.C67, 4295426116.0, C68 || CT.C68, 4295426117.0, C69 || CT.C69, 4295426118.0, C70 || CT.C70, 4295426119.0, C71 || CT.C71, 4295426120.0, C72 || CT.C72, 4295426121.0, C73 || CT.C73, 4295426122.0, C74 || CT.C74, 4295426123.0, C75 || CT.C75, 4295426124.0, C76 || CT.C76, 4295426125.0, C77 || CT.C77, 4295426126.0, C78 || CT.C78, 4295426127.0, C79 || CT.C79, 4295426128.0, C80 || CT.C80, 4295426129.0, C81 || CT.C81, 4295426130.0, C82 || CT.C82, 4295426131.0, C83 || CT.C83, 4295426132.0, C84 || CT.C84, 4295426133.0, C85 || CT.C85, 4295426134.0, C86 || CT.C86, 4295426135.0, C87 || CT.C87, 4295426136.0, C88 || CT.C88, 4295426137.0, C89 || CT.C89, 4295426138.0, C90 || CT.C90, 4295426139.0, C91 || CT.C91, 4295426140.0, C92 || CT.C92, 4295426141.0, C93 || CT.C93, 4295426142.0, C94 || CT.C94, 4295426143.0, C95 || CT.C95, 4295426144.0, C96 || CT.C96, 4295426145.0, C97 || CT.C97, 4295426146.0, C98 || CT.C98, 4295426147.0, C99 || CT.C99, 4295426148.0, C331 || CT.C331, 4295426149.0, C100 || CT.C100, 4295426150.0, C101 || CT.C101, 4295426151.0, C102 || CT.C102, 4295426152.0, C332 || CT.C332, 4295426153.0, C333 || CT.C333, 4295426154.0, C334 || CT.C334, 4295426155.0, C335 || CT.C335, 4295426156.0, C336 || CT.C336, 4295426157.0, C337 || CT.C337, 4295426158.0, C338 || CT.C338, 4295426159.0, C339 || CT.C339, 4295426160.0, C340 || CT.C340, 4295426161.0, C341 || CT.C341, 4295426162.0, C342 || CT.C342, 4295426163.0, C343 || CT.C343, 4295426164.0, C344 || CT.C344, 4295426165.0, C103 || CT.C103, 4295426167.0, C345 || CT.C345, 4295426169.0, C346 || CT.C346, 4295426170.0, C347 || CT.C347, 4295426171.0, C104 || CT.C104, 4295426172.0, C105 || CT.C105, 4295426173.0, C106 || CT.C106, 4295426174.0, C348 || CT.C348, 4295426175.0, C107 || CT.C107, 4295426176.0, C108 || CT.C108, 4295426177.0, C109 || CT.C109, 4295426181.0, C110 || CT.C110, 4295426183.0, C349 || CT.C349, 4295426184.0, C350 || CT.C350, 4295426185.0, C351 || CT.C351, 4295426186.0, C111 || CT.C111, 4295426187.0, C112 || CT.C112, 4295426192.0, C352 || CT.C352, 4295426193.0, C353 || CT.C353, 4295426194.0, C354 || CT.C354, 4295426195.0, C355 || CT.C355, 4295426196.0, C356 || CT.C356, 4295426203.0, C357 || CT.C357, 4295426211.0, C358 || CT.C358, 4295426230.0, C113 || CT.C113, 4295426231.0, C114 || CT.C114, 4295426235.0, C359 || CT.C359, 4295426256.0, C360 || CT.C360, 4295426257.0, C361 || CT.C361, 4295426258.0, C362 || CT.C362, 4295426259.0, C363 || CT.C363, 4295426260.0, C364 || CT.C364, 4295426263.0, C365 || CT.C365, 4295426264.0, C366 || CT.C366, 4295426265.0, C367 || CT.C367, 4295426272.0, C115 || CT.C115, 4295426273.0, C116 || CT.C116, 4295426274.0, C117 || CT.C117, 4295426275.0, C118 || CT.C118, 4295426276.0, C119 || CT.C119, 4295426277.0, C120 || CT.C120, 4295426278.0, C121 || CT.C121, 4295426279.0, C122 || CT.C122, 4295753824.0, C123 || CT.C123, 4295753825.0, C124 || CT.C124, 4295753839.0, C125 || CT.C125, 4295753840.0, C126 || CT.C126, 4295753842.0, C368 || CT.C368, 4295753843.0, C369 || CT.C369, 4295753844.0, C370 || CT.C370, 4295753845.0, C371 || CT.C371, 4295753859.0, C127 || CT.C127, 4295753868.0, C372 || CT.C372, 4295753869.0, C373 || CT.C373, 4295753876.0, C374 || CT.C374, 4295753884.0, C128 || CT.C128, 4295753885.0, C129 || CT.C129, 4295753904.0, C130 || CT.C130, 4295753906.0, C131 || CT.C131, 4295753907.0, C132 || CT.C132, 4295753908.0, C133 || CT.C133, 4295753909.0, C134 || CT.C134, 4295753910.0, C135 || CT.C135, 4295753911.0, C136 || CT.C136, 4295753912.0, C137 || CT.C137, 4295753933.0, C138 || CT.C138, 4295753935.0, C375 || CT.C375, 4295753957.0, C376 || CT.C376, 4295754115.0, C377 || CT.C377, 4295754116.0, C378 || CT.C378, 4295754118.0, C379 || CT.C379, 4295754122.0, C139 || CT.C139, 4295754125.0, C140 || CT.C140, 4295754126.0, C141 || CT.C141, 4295754130.0, C380 || CT.C380, 4295754132.0, C381 || CT.C381, 4295754134.0, C382 || CT.C382, 4295754140.0, C383 || CT.C383, 4295754142.0, C384 || CT.C384, 4295754143.0, C385 || CT.C385, 4295754146.0, C386 || CT.C386, 4295754151.0, C387 || CT.C387, 4295754155.0, C388 || CT.C388, 4295754158.0, C389 || CT.C389, 4295754161.0, C390 || CT.C390, 4295754187.0, C142 || CT.C142, 4295754167.0, C391 || CT.C391, 4295754241.0, C392 || CT.C392, 4295754243.0, C143 || CT.C143, 4295754247.0, C393 || CT.C393, 4295754248.0, C394 || CT.C394, 4295754273.0, C144 || CT.C144, 4295754275.0, C395 || CT.C395, 4295754276.0, C396 || CT.C396, 4295754277.0, C145 || CT.C145, 4295754278.0, C397 || CT.C397, 4295754279.0, C398 || CT.C398, 4295754282.0, C146 || CT.C146, 4295754285.0, C147 || CT.C147, 4295754286.0, C148 || CT.C148, 4295754290.0, C149 || CT.C149, 4295754361.0, C399 || CT.C399, 4295754377.0, C400 || CT.C400, 4295754379.0, C401 || CT.C401, 4295754380.0, C402 || CT.C402, 4295754399.0, C403 || CT.C403]);
    },
    get C405() {
      return C405 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "None",
        usbHidUsage: 0
      });
    },
    get C406() {
      return C406 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Hyper",
        usbHidUsage: 16
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Super Key",
        usbHidUsage: 17
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Fn Lock",
        usbHidUsage: 19
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Resume",
        usbHidUsage: 21
      });
    },
    get C410() {
      return C410 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Turbo",
        usbHidUsage: 22
      });
    },
    get C411() {
      return C411 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Display Toggle Int Ext",
        usbHidUsage: 65717
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Reserved",
        usbHidUsage: 458752
      });
    },
    get C413() {
      return C413 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Error Roll Over",
        usbHidUsage: 458753
      });
    },
    get C414() {
      return C414 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Post Fail",
        usbHidUsage: 458754
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Usb Error Undefined",
        usbHidUsage: 458755
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Backslash",
        usbHidUsage: 458852
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Select",
        usbHidUsage: 458871
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Ro",
        usbHidUsage: 458887
      });
    },
    get C419() {
      return C419 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Kana Mode",
        usbHidUsage: 458888
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Intl Yen",
        usbHidUsage: 458889
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 1",
        usbHidUsage: 458896
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 2",
        usbHidUsage: 458897
      });
    },
    get C423() {
      return C423 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lang 5",
        usbHidUsage: 458900
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Abort",
        usbHidUsage: 458907
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Backspace",
        usbHidUsage: 458939
      });
    },
    get C426() {
      return C426 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Store",
        usbHidUsage: 458960
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Recall",
        usbHidUsage: 458961
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Clear",
        usbHidUsage: 458962
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Add",
        usbHidUsage: 458963
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Memory Subtract",
        usbHidUsage: 458964
      });
    },
    get C431() {
      return C431 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Sign Change",
        usbHidUsage: 458967
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Clear",
        usbHidUsage: 458968
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Numpad Clear Entry",
        usbHidUsage: 458969
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Closed Caption Toggle",
        usbHidUsage: 786529
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Toggle",
        usbHidUsage: 786546
      });
    },
    get C436() {
      return C436 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Minimum",
        usbHidUsage: 786547
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Maximum",
        usbHidUsage: 786548
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Brightness Auto",
        usbHidUsage: 786549
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Last",
        usbHidUsage: 786563
      });
    },
    get C440() {
      return C440 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Phone",
        usbHidUsage: 786572
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Program Guide",
        usbHidUsage: 786573
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Speech Input Toggle",
        usbHidUsage: 786639
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Media Select",
        usbHidUsage: 786819
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Word Processor",
        usbHidUsage: 786820
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Spreadsheet",
        usbHidUsage: 786822
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch App2",
        usbHidUsage: 786834
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch App1",
        usbHidUsage: 786836
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Internet Browser",
        usbHidUsage: 786838
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Log Off",
        usbHidUsage: 786844
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Lock Screen",
        usbHidUsage: 786846
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Control Panel",
        usbHidUsage: 786847
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Select Task",
        usbHidUsage: 786850
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Documents",
        usbHidUsage: 786855
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Spell Check",
        usbHidUsage: 786859
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Keyboard Layout",
        usbHidUsage: 786862
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Screen Saver",
        usbHidUsage: 786865
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Assistant",
        usbHidUsage: 786891
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Launch Audio Browser",
        usbHidUsage: 786871
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Save",
        usbHidUsage: 786951
      });
    },
    get C460() {
      return C460 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Home",
        usbHidUsage: 786979
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Back",
        usbHidUsage: 786980
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Stop",
        usbHidUsage: 786982
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Browser Refresh",
        usbHidUsage: 786983
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom In",
        usbHidUsage: 786989
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom Out",
        usbHidUsage: 786990
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Zoom Toggle",
        usbHidUsage: 786994
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Reply",
        usbHidUsage: 787081
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Forward",
        usbHidUsage: 787083
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Mail Send",
        usbHidUsage: 787084
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: keyboard_key.PhysicalKeyboardKey.prototype,
        debugName: "Show All Windows",
        usbHidUsage: 787103
      });
    },
    get C404() {
      return C404 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C405 || CT.C405, 16, C406 || CT.C406, 17, C407 || CT.C407, 18, C151 || CT.C151, 19, C408 || CT.C408, 20, C152 || CT.C152, 21, C409 || CT.C409, 22, C410 || CT.C410, 65666, C153 || CT.C153, 65667, C154 || CT.C154, 65717, C411 || CT.C411, 458752, C412 || CT.C412, 458753, C413 || CT.C413, 458754, C414 || CT.C414, 458755, C415 || CT.C415, 458756, C155 || CT.C155, 458757, C156 || CT.C156, 458758, C157 || CT.C157, 458759, C158 || CT.C158, 458760, C159 || CT.C159, 458761, C160 || CT.C160, 458762, C161 || CT.C161, 458763, C162 || CT.C162, 458764, C163 || CT.C163, 458765, C164 || CT.C164, 458766, C165 || CT.C165, 458767, C166 || CT.C166, 458768, C167 || CT.C167, 458769, C168 || CT.C168, 458770, C169 || CT.C169, 458771, C170 || CT.C170, 458772, C171 || CT.C171, 458773, C172 || CT.C172, 458774, C173 || CT.C173, 458775, C174 || CT.C174, 458776, C175 || CT.C175, 458777, C176 || CT.C176, 458778, C177 || CT.C177, 458779, C178 || CT.C178, 458780, C179 || CT.C179, 458781, C180 || CT.C180, 458782, C181 || CT.C181, 458783, C182 || CT.C182, 458784, C183 || CT.C183, 458785, C184 || CT.C184, 458786, C185 || CT.C185, 458787, C186 || CT.C186, 458788, C187 || CT.C187, 458789, C188 || CT.C188, 458790, C189 || CT.C189, 458791, C190 || CT.C190, 458792, C191 || CT.C191, 458793, C192 || CT.C192, 458794, C193 || CT.C193, 458795, C194 || CT.C194, 458796, C195 || CT.C195, 458797, C196 || CT.C196, 458798, C197 || CT.C197, 458799, C198 || CT.C198, 458800, C199 || CT.C199, 458801, C200 || CT.C200, 458803, C201 || CT.C201, 458804, C202 || CT.C202, 458805, C203 || CT.C203, 458806, C204 || CT.C204, 458807, C205 || CT.C205, 458808, C206 || CT.C206, 458809, C207 || CT.C207, 458810, C208 || CT.C208, 458811, C209 || CT.C209, 458812, C210 || CT.C210, 458813, C211 || CT.C211, 458814, C212 || CT.C212, 458815, C213 || CT.C213, 458816, C214 || CT.C214, 458817, C215 || CT.C215, 458818, C216 || CT.C216, 458819, C217 || CT.C217, 458820, C218 || CT.C218, 458821, C219 || CT.C219, 458822, C220 || CT.C220, 458823, C221 || CT.C221, 458824, C222 || CT.C222, 458825, C223 || CT.C223, 458826, C224 || CT.C224, 458827, C225 || CT.C225, 458828, C226 || CT.C226, 458829, C227 || CT.C227, 458830, C228 || CT.C228, 458831, C229 || CT.C229, 458832, C230 || CT.C230, 458833, C231 || CT.C231, 458834, C232 || CT.C232, 458835, C233 || CT.C233, 458836, C234 || CT.C234, 458837, C235 || CT.C235, 458838, C236 || CT.C236, 458839, C237 || CT.C237, 458840, C238 || CT.C238, 458841, C239 || CT.C239, 458842, C240 || CT.C240, 458843, C241 || CT.C241, 458844, C242 || CT.C242, 458845, C243 || CT.C243, 458846, C244 || CT.C244, 458847, C245 || CT.C245, 458848, C246 || CT.C246, 458849, C247 || CT.C247, 458850, C248 || CT.C248, 458851, C249 || CT.C249, 458852, C416 || CT.C416, 458853, C250 || CT.C250, 458854, C251 || CT.C251, 458855, C252 || CT.C252, 458856, C253 || CT.C253, 458857, C254 || CT.C254, 458858, C255 || CT.C255, 458859, C256 || CT.C256, 458860, C257 || CT.C257, 458861, C258 || CT.C258, 458862, C259 || CT.C259, 458863, C260 || CT.C260, 458864, C261 || CT.C261, 458865, C262 || CT.C262, 458866, C263 || CT.C263, 458867, C264 || CT.C264, 458868, C265 || CT.C265, 458869, C266 || CT.C266, 458871, C417 || CT.C417, 458873, C267 || CT.C267, 458874, C268 || CT.C268, 458875, C269 || CT.C269, 458876, C270 || CT.C270, 458877, C271 || CT.C271, 458878, C272 || CT.C272, 458879, C273 || CT.C273, 458880, C274 || CT.C274, 458881, C275 || CT.C275, 458885, C276 || CT.C276, 458887, C418 || CT.C418, 458888, C419 || CT.C419, 458889, C420 || CT.C420, 458890, C277 || CT.C277, 458891, C278 || CT.C278, 458896, C421 || CT.C421, 458897, C422 || CT.C422, 458898, C279 || CT.C279, 458899, C280 || CT.C280, 458900, C423 || CT.C423, 458907, C424 || CT.C424, 458915, C281 || CT.C281, 458934, C282 || CT.C282, 458935, C283 || CT.C283, 458939, C425 || CT.C425, 458960, C426 || CT.C426, 458961, C427 || CT.C427, 458962, C428 || CT.C428, 458963, C429 || CT.C429, 458964, C430 || CT.C430, 458967, C431 || CT.C431, 458968, C432 || CT.C432, 458969, C433 || CT.C433, 458976, C284 || CT.C284, 458977, C285 || CT.C285, 458978, C286 || CT.C286, 458979, C287 || CT.C287, 458980, C288 || CT.C288, 458981, C289 || CT.C289, 458982, C290 || CT.C290, 458983, C291 || CT.C291, 786528, C292 || CT.C292, 786529, C434 || CT.C434, 786543, C293 || CT.C293, 786544, C294 || CT.C294, 786546, C435 || CT.C435, 786547, C436 || CT.C436, 786548, C437 || CT.C437, 786549, C438 || CT.C438, 786563, C439 || CT.C439, 786572, C440 || CT.C440, 786573, C441 || CT.C441, 786580, C295 || CT.C295, 786588, C296 || CT.C296, 786589, C297 || CT.C297, 786608, C298 || CT.C298, 786610, C299 || CT.C299, 786611, C300 || CT.C300, 786612, C301 || CT.C301, 786613, C302 || CT.C302, 786614, C303 || CT.C303, 786615, C304 || CT.C304, 786616, C305 || CT.C305, 786637, C306 || CT.C306, 786639, C442 || CT.C442, 786661, C307 || CT.C307, 786819, C443 || CT.C443, 786820, C444 || CT.C444, 786822, C445 || CT.C445, 786826, C308 || CT.C308, 786829, C309 || CT.C309, 786830, C310 || CT.C310, 786834, C446 || CT.C446, 786836, C447 || CT.C447, 786838, C448 || CT.C448, 786844, C449 || CT.C449, 786846, C450 || CT.C450, 786847, C451 || CT.C451, 786850, C452 || CT.C452, 786855, C453 || CT.C453, 786859, C454 || CT.C454, 786862, C455 || CT.C455, 786865, C456 || CT.C456, 786891, C457 || CT.C457, 786871, C458 || CT.C458, 786945, C311 || CT.C311, 786947, C312 || CT.C312, 786951, C459 || CT.C459, 786952, C313 || CT.C313, 786977, C314 || CT.C314, 786979, C460 || CT.C460, 786980, C461 || CT.C461, 786981, C315 || CT.C315, 786982, C462 || CT.C462, 786983, C463 || CT.C463, 786986, C316 || CT.C316, 786989, C464 || CT.C464, 786990, C465 || CT.C465, 786994, C466 || CT.C466, 787065, C317 || CT.C317, 787081, C467 || CT.C467, 787083, C468 || CT.C468, 787084, C469 || CT.C469, 787103, C470 || CT.C470]);
    },
    get C471() {
      return C471 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [0, C155 || CT.C155, 11, C156 || CT.C156, 8, C157 || CT.C157, 2, C158 || CT.C158, 14, C159 || CT.C159, 3, C160 || CT.C160, 5, C161 || CT.C161, 4, C162 || CT.C162, 34, C163 || CT.C163, 38, C164 || CT.C164, 40, C165 || CT.C165, 37, C166 || CT.C166, 46, C167 || CT.C167, 45, C168 || CT.C168, 31, C169 || CT.C169, 35, C170 || CT.C170, 12, C171 || CT.C171, 15, C172 || CT.C172, 1, C173 || CT.C173, 17, C174 || CT.C174, 32, C175 || CT.C175, 9, C176 || CT.C176, 13, C177 || CT.C177, 7, C178 || CT.C178, 16, C179 || CT.C179, 6, C180 || CT.C180, 18, C181 || CT.C181, 19, C182 || CT.C182, 20, C183 || CT.C183, 21, C184 || CT.C184, 23, C185 || CT.C185, 22, C186 || CT.C186, 26, C187 || CT.C187, 28, C188 || CT.C188, 25, C189 || CT.C189, 29, C190 || CT.C190, 36, C191 || CT.C191, 53, C192 || CT.C192, 51, C193 || CT.C193, 48, C194 || CT.C194, 49, C195 || CT.C195, 27, C196 || CT.C196, 24, C197 || CT.C197, 33, C198 || CT.C198, 30, C199 || CT.C199, 42, C200 || CT.C200, 41, C201 || CT.C201, 39, C202 || CT.C202, 50, C203 || CT.C203, 43, C204 || CT.C204, 47, C205 || CT.C205, 44, C206 || CT.C206, 57, C207 || CT.C207, 122, C208 || CT.C208, 120, C209 || CT.C209, 99, C210 || CT.C210, 118, C211 || CT.C211, 96, C212 || CT.C212, 97, C213 || CT.C213, 98, C214 || CT.C214, 100, C215 || CT.C215, 101, C216 || CT.C216, 109, C217 || CT.C217, 103, C218 || CT.C218, 111, C219 || CT.C219, 114, C223 || CT.C223, 115, C224 || CT.C224, 116, C225 || CT.C225, 117, C226 || CT.C226, 119, C227 || CT.C227, 121, C228 || CT.C228, 124, C229 || CT.C229, 123, C230 || CT.C230, 125, C231 || CT.C231, 126, C232 || CT.C232, 71, C233 || CT.C233, 75, C234 || CT.C234, 67, C235 || CT.C235, 78, C236 || CT.C236, 69, C237 || CT.C237, 76, C238 || CT.C238, 83, C239 || CT.C239, 84, C240 || CT.C240, 85, C241 || CT.C241, 86, C242 || CT.C242, 87, C243 || CT.C243, 88, C244 || CT.C244, 89, C245 || CT.C245, 91, C246 || CT.C246, 92, C247 || CT.C247, 82, C248 || CT.C248, 65, C249 || CT.C249, 10, C416 || CT.C416, 110, C250 || CT.C250, 81, C252 || CT.C252, 105, C253 || CT.C253, 107, C254 || CT.C254, 113, C255 || CT.C255, 106, C256 || CT.C256, 64, C257 || CT.C257, 79, C258 || CT.C258, 80, C259 || CT.C259, 90, C260 || CT.C260, 74, C273 || CT.C273, 72, C274 || CT.C274, 73, C275 || CT.C275, 95, C276 || CT.C276, 94, C418 || CT.C418, 104, C419 || CT.C419, 93, C420 || CT.C420, 59, C284 || CT.C284, 56, C285 || CT.C285, 58, C286 || CT.C286, 55, C287 || CT.C287, 62, C288 || CT.C288, 60, C289 || CT.C289, 61, C290 || CT.C290, 54, C291 || CT.C291]);
    },
    get C472() {
      return C472 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [75, C84 || CT.C84, 67, C85 || CT.C85, 78, C86 || CT.C86, 69, C87 || CT.C87, 83, C89 || CT.C89, 84, C90 || CT.C90, 85, C91 || CT.C91, 86, C92 || CT.C92, 87, C93 || CT.C93, 88, C94 || CT.C94, 89, C95 || CT.C95, 91, C96 || CT.C96, 92, C97 || CT.C97, 82, C98 || CT.C98, 65, C99 || CT.C99, 81, C102 || CT.C102, 95, C110 || CT.C110]);
    },
    get C473() {
      return C473 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [65, C5 || CT.C5, 66, C6 || CT.C6, 67, C7 || CT.C7, 68, C8 || CT.C8, 69, C9 || CT.C9, 70, C10 || CT.C10, 71, C11 || CT.C11, 72, C12 || CT.C12, 73, C13 || CT.C13, 74, C14 || CT.C14, 75, C15 || CT.C15, 76, C16 || CT.C16, 77, C17 || CT.C17, 78, C18 || CT.C18, 79, C19 || CT.C19, 80, C20 || CT.C20, 81, C21 || CT.C21, 82, C22 || CT.C22, 83, C23 || CT.C23, 84, C24 || CT.C24, 85, C25 || CT.C25, 86, C26 || CT.C26, 87, C27 || CT.C27, 88, C28 || CT.C28, 89, C29 || CT.C29, 90, C30 || CT.C30, 49, C31 || CT.C31, 50, C32 || CT.C32, 51, C33 || CT.C33, 52, C34 || CT.C34, 53, C35 || CT.C35, 54, C36 || CT.C36, 55, C37 || CT.C37, 56, C38 || CT.C38, 57, C39 || CT.C39, 48, C40 || CT.C40, 257, C41 || CT.C41, 256, C42 || CT.C42, 259, C43 || CT.C43, 258, C44 || CT.C44, 32, C45 || CT.C45, 45, C46 || CT.C46, 61, C47 || CT.C47, 91, C48 || CT.C48, 93, C49 || CT.C49, 92, C50 || CT.C50, 59, C51 || CT.C51, 39, C52 || CT.C52, 96, C53 || CT.C53, 44, C54 || CT.C54, 46, C55 || CT.C55, 47, C56 || CT.C56, 280, C57 || CT.C57, 290, C58 || CT.C58, 291, C59 || CT.C59, 292, C60 || CT.C60, 293, C61 || CT.C61, 294, C62 || CT.C62, 295, C63 || CT.C63, 296, C64 || CT.C64, 297, C65 || CT.C65, 298, C66 || CT.C66, 299, C67 || CT.C67, 300, C68 || CT.C68, 301, C69 || CT.C69, 283, C70 || CT.C70, 284, C72 || CT.C72, 260, C73 || CT.C73, 268, C74 || CT.C74, 266, C75 || CT.C75, 261, C76 || CT.C76, 269, C77 || CT.C77, 267, C78 || CT.C78, 262, C79 || CT.C79, 263, C80 || CT.C80, 264, C81 || CT.C81, 265, C82 || CT.C82, 282, C83 || CT.C83, 331, C84 || CT.C84, 332, C85 || CT.C85, 334, C87 || CT.C87, 335, C88 || CT.C88, 321, C89 || CT.C89, 322, C90 || CT.C90, 323, C91 || CT.C91, 324, C92 || CT.C92, 325, C93 || CT.C93, 326, C94 || CT.C94, 327, C95 || CT.C95, 328, C96 || CT.C96, 329, C97 || CT.C97, 320, C98 || CT.C98, 330, C99 || CT.C99, 348, C100 || CT.C100, 336, C102 || CT.C102, 302, C332 || CT.C332, 303, C333 || CT.C333, 304, C334 || CT.C334, 305, C335 || CT.C335, 306, C336 || CT.C336, 307, C337 || CT.C337, 308, C338 || CT.C338, 309, C339 || CT.C339, 310, C340 || CT.C340, 311, C341 || CT.C341, 312, C342 || CT.C342, 341, C115 || CT.C115, 340, C116 || CT.C116, 342, C117 || CT.C117, 345, C119 || CT.C119, 344, C120 || CT.C120, 346, C121 || CT.C121]);
    },
    get C474() {
      return C474 = dart.constMap(core.int, keyboard_key.LogicalKeyboardKey, [331, C84 || CT.C84, 332, C85 || CT.C85, 334, C87 || CT.C87, 321, C89 || CT.C89, 322, C90 || CT.C90, 323, C91 || CT.C91, 324, C92 || CT.C92, 325, C93 || CT.C93, 326, C94 || CT.C94, 327, C95 || CT.C95, 328, C96 || CT.C96, 329, C97 || CT.C97, 320, C98 || CT.C98, 330, C99 || CT.C99, 336, C102 || CT.C102]);
    },
    get C475() {
      return C475 = dart.constMap(core.int, keyboard_key.PhysicalKeyboardKey, [150, C153 || CT.C153, 151, C154 || CT.C154, 235, C411 || CT.C411, 38, C155 || CT.C155, 56, C156 || CT.C156, 54, C157 || CT.C157, 40, C158 || CT.C158, 26, C159 || CT.C159, 41, C160 || CT.C160, 42, C161 || CT.C161, 43, C162 || CT.C162, 31, C163 || CT.C163, 44, C164 || CT.C164, 45, C165 || CT.C165, 46, C166 || CT.C166, 58, C167 || CT.C167, 57, C168 || CT.C168, 32, C169 || CT.C169, 33, C170 || CT.C170, 24, C171 || CT.C171, 27, C172 || CT.C172, 39, C173 || CT.C173, 28, C174 || CT.C174, 30, C175 || CT.C175, 55, C176 || CT.C176, 25, C177 || CT.C177, 53, C178 || CT.C178, 29, C179 || CT.C179, 52, C180 || CT.C180, 10, C181 || CT.C181, 11, C182 || CT.C182, 12, C183 || CT.C183, 13, C184 || CT.C184, 14, C185 || CT.C185, 15, C186 || CT.C186, 16, C187 || CT.C187, 17, C188 || CT.C188, 18, C189 || CT.C189, 19, C190 || CT.C190, 36, C191 || CT.C191, 9, C192 || CT.C192, 22, C193 || CT.C193, 23, C194 || CT.C194, 65, C195 || CT.C195, 20, C196 || CT.C196, 21, C197 || CT.C197, 34, C198 || CT.C198, 35, C199 || CT.C199, 51, C200 || CT.C200, 47, C201 || CT.C201, 48, C202 || CT.C202, 49, C203 || CT.C203, 59, C204 || CT.C204, 60, C205 || CT.C205, 61, C206 || CT.C206, 66, C207 || CT.C207, 67, C208 || CT.C208, 68, C209 || CT.C209, 69, C210 || CT.C210, 70, C211 || CT.C211, 71, C212 || CT.C212, 72, C213 || CT.C213, 73, C214 || CT.C214, 74, C215 || CT.C215, 75, C216 || CT.C216, 76, C217 || CT.C217, 95, C218 || CT.C218, 96, C219 || CT.C219, 107, C220 || CT.C220, 78, C221 || CT.C221, 127, C222 || CT.C222, 118, C223 || CT.C223, 110, C224 || CT.C224, 112, C225 || CT.C225, 119, C226 || CT.C226, 115, C227 || CT.C227, 117, C228 || CT.C228, 114, C229 || CT.C229, 113, C230 || CT.C230, 116, C231 || CT.C231, 111, C232 || CT.C232, 77, C233 || CT.C233, 106, C234 || CT.C234, 63, C235 || CT.C235, 82, C236 || CT.C236, 86, C237 || CT.C237, 104, C238 || CT.C238, 87, C239 || CT.C239, 88, C240 || CT.C240, 89, C241 || CT.C241, 83, C242 || CT.C242, 84, C243 || CT.C243, 85, C244 || CT.C244, 79, C245 || CT.C245, 80, C246 || CT.C246, 81, C247 || CT.C247, 90, C248 || CT.C248, 91, C249 || CT.C249, 94, C416 || CT.C416, 135, C250 || CT.C250, 124, C251 || CT.C251, 125, C252 || CT.C252, 191, C253 || CT.C253, 192, C254 || CT.C254, 193, C255 || CT.C255, 194, C256 || CT.C256, 195, C257 || CT.C257, 196, C258 || CT.C258, 197, C259 || CT.C259, 198, C260 || CT.C260, 199, C261 || CT.C261, 200, C262 || CT.C262, 201, C263 || CT.C263, 202, C264 || CT.C264, 142, C265 || CT.C265, 146, C266 || CT.C266, 140, C417 || CT.C417, 137, C267 || CT.C267, 139, C268 || CT.C268, 145, C269 || CT.C269, 141, C270 || CT.C270, 143, C271 || CT.C271, 144, C272 || CT.C272, 121, C273 || CT.C273, 123, C274 || CT.C274, 122, C275 || CT.C275, 129, C276 || CT.C276, 97, C418 || CT.C418, 101, C419 || CT.C419, 132, C420 || CT.C420, 100, C277 || CT.C277, 102, C278 || CT.C278, 130, C421 || CT.C421, 131, C422 || CT.C422, 98, C279 || CT.C279, 99, C280 || CT.C280, 93, C423 || CT.C423, 187, C282 || CT.C282, 188, C283 || CT.C283, 126, C431 || CT.C431, 37, C284 || CT.C284, 50, C285 || CT.C285, 64, C286 || CT.C286, 133, C287 || CT.C287, 105, C288 || CT.C288, 62, C289 || CT.C289, 108, C290 || CT.C290, 134, C291 || CT.C291, 366, C292 || CT.C292, 378, C434 || CT.C434, 233, C293 || CT.C293, 232, C294 || CT.C294, 439, C435 || CT.C435, 600, C436 || CT.C436, 601, C437 || CT.C437, 252, C438 || CT.C438, 413, C439 || CT.C439, 177, C440 || CT.C440, 370, C441 || CT.C441, 182, C295 || CT.C295, 418, C296 || CT.C296, 419, C297 || CT.C297, 215, C298 || CT.C298, 175, C299 || CT.C299, 216, C300 || CT.C300, 176, C301 || CT.C301, 171, C302 || CT.C302, 173, C303 || CT.C303, 174, C304 || CT.C304, 169, C305 || CT.C305, 172, C306 || CT.C306, 590, C442 || CT.C442, 217, C307 || CT.C307, 179, C443 || CT.C443, 429, C444 || CT.C444, 431, C445 || CT.C445, 163, C308 || CT.C308, 437, C309 || CT.C309, 405, C310 || CT.C310, 148, C446 || CT.C446, 152, C447 || CT.C447, 158, C448 || CT.C448, 441, C449 || CT.C449, 160, C450 || CT.C450, 587, C451 || CT.C451, 588, C452 || CT.C452, 243, C453 || CT.C453, 440, C454 || CT.C454, 382, C455 || CT.C455, 589, C456 || CT.C456, 591, C457 || CT.C457, 400, C458 || CT.C458, 189, C311 || CT.C311, 214, C312 || CT.C312, 242, C459 || CT.C459, 218, C313 || CT.C313, 225, C314 || CT.C314, 180, C460 || CT.C460, 166, C461 || CT.C461, 167, C315 || CT.C315, 136, C462 || CT.C462, 181, C463 || CT.C463, 164, C316 || CT.C316, 426, C464 || CT.C464, 427, C465 || CT.C465, 380, C466 || CT.C466, 190, C317 || CT.C317, 240, C467 || CT.C467, 241, C468 || CT.C468, 239, C469 || CT.C469, 128, C470 || CT.C470]);
    },
    get C477() {
      return C477 = dart.const({
        __proto__: message_codecs.StandardMessageCodec.prototype
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: message_codecs.StandardMethodCodec.prototype,
        messageCodec: C477 || CT.C477
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: message_codecs.StringCodec.prototype
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: message_codecs.JSONMessageCodec.prototype
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Message corrupted"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Invalid method call"
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Expected envelope, got nothing"
      });
    },
    get C483() {
      return C483 = dart.const({
        __proto__: core.FormatException.prototype,
        offset: null,
        source: null,
        message: "Invalid envelope"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: message_codecs.JSONMethodCodec.prototype
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        codec: C485 || CT.C485,
        name: "flutter/navigation"
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        codec: C485 || CT.C485,
        name: "flutter/platform"
      });
    },
    get C487() {
      return C487 = dart.const({
        __proto__: platform_channel.OptionalMethodChannel.prototype,
        codec: C485 || CT.C485,
        name: "flutter/textinput"
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        codec: C479 || CT.C479,
        name: "flutter/keyevent"
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: BasicMessageChannelOfString().prototype,
        codec: C478 || CT.C478,
        name: "flutter/lifecycle"
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        codec: C479 || CT.C479,
        name: "flutter/system"
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: platform_channel.BasicMessageChannel.prototype,
        codec: C477 || CT.C477,
        name: "flutter/accessibility"
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: platform_channel.MethodChannel.prototype,
        codec: C476 || CT.C476,
        name: "flutter/platform_views"
      });
    },
    get C493() {
      return C493 = dart.const({
        __proto__: text_editing.TextRange.prototype,
        end: -1,
        start: -1
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: ui.TextAffinity.prototype,
        [_name]: "TextAffinity.downstream",
        index: 1
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 0
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 1
      });
    },
    get C497() {
      return C497 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: false,
        signed: false,
        index: 2
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 3
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 4
      });
    },
    get C500() {
      return C500 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 5
      });
    },
    get C501() {
      return C501 = dart.const({
        __proto__: text_input.TextInputType.prototype,
        decimal: null,
        signed: null,
        index: 6
      });
    },
    get C502() {
      return C502 = dart.constList([C495 || CT.C495, C496 || CT.C496, C497 || CT.C497, C498 || CT.C498, C499 || CT.C499, C500 || CT.C500, C501 || CT.C501], text_input.TextInputType);
    },
    get C503() {
      return C503 = dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url"], core.String);
    },
    get C504() {
      return C504 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.none",
        index: 0
      });
    },
    get C505() {
      return C505 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.unspecified",
        index: 1
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.done",
        index: 2
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.go",
        index: 3
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.search",
        index: 4
      });
    },
    get C509() {
      return C509 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.send",
        index: 5
      });
    },
    get C510() {
      return C510 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.next",
        index: 6
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.previous",
        index: 7
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.continueAction",
        index: 8
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.join",
        index: 9
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.route",
        index: 10
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.emergencyCall",
        index: 11
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name$]: "TextInputAction.newline",
        index: 12
      });
    },
    get C517() {
      return C517 = dart.constList([C504 || CT.C504, C505 || CT.C505, C506 || CT.C506, C507 || CT.C507, C508 || CT.C508, C509 || CT.C509, C510 || CT.C510, C511 || CT.C511, C512 || CT.C512, C513 || CT.C513, C514 || CT.C514, C515 || CT.C515, C516 || CT.C516], text_input.TextInputAction);
    },
    get C518() {
      return C518 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.words",
        index: 0
      });
    },
    get C519() {
      return C519 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.sentences",
        index: 1
      });
    },
    get C520() {
      return C520 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.characters",
        index: 2
      });
    },
    get C521() {
      return C521 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name$]: "TextCapitalization.none",
        index: 3
      });
    },
    get C522() {
      return C522 = dart.constList([C518 || CT.C518, C519 || CT.C519, C520 || CT.C520, C521 || CT.C521], text_input.TextCapitalization);
    },
    get C523() {
      return C523 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.light",
        index: 1
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.Start",
        index: 0
      });
    },
    get C525() {
      return C525 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.Update",
        index: 1
      });
    },
    get C526() {
      return C526 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name$]: "FloatingCursorDragState.End",
        index: 2
      });
    },
    get C527() {
      return C527 = dart.constList([C524 || CT.C524, C525 || CT.C525, C526 || CT.C526], text_input.FloatingCursorDragState);
    },
    get C528() {
      return C528 = dart.const({
        __proto__: text_editing.TextSelection.prototype,
        end: -1,
        start: -1,
        isDirectional: false,
        affinity: C494 || CT.C494,
        extentOffset: -1,
        baseOffset: -1
      });
    },
    get C529() {
      return C529 = dart.const({
        __proto__: text_input.TextEditingValue.prototype,
        composing: C493 || CT.C493,
        selection: C528 || CT.C528,
        text: ""
      });
    },
    get C530() {
      return C530 = dart.constList([C504 || CT.C504, C505 || CT.C505, C506 || CT.C506, C509 || CT.C509, C507 || CT.C507, C508 || CT.C508, C510 || CT.C510, C511 || CT.C511, C516 || CT.C516], text_input.TextInputAction);
    },
    get C531() {
      return C531 = dart.constList([C505 || CT.C505, C506 || CT.C506, C509 || CT.C509, C507 || CT.C507, C508 || CT.C508, C510 || CT.C510, C516 || CT.C516, C512 || CT.C512, C513 || CT.C513, C514 || CT.C514, C515 || CT.C515], text_input.TextInputAction);
    },
    get C532() {
      return C532 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$0]: "DeviceOrientation.portraitUp",
        index: 0
      });
    },
    get C534() {
      return C534 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$0]: "DeviceOrientation.landscapeLeft",
        index: 1
      });
    },
    get C535() {
      return C535 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$0]: "DeviceOrientation.portraitDown",
        index: 2
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: system_chrome.DeviceOrientation.prototype,
        [_name$0]: "DeviceOrientation.landscapeRight",
        index: 3
      });
    },
    get C537() {
      return C537 = dart.constList([C533 || CT.C533, C534 || CT.C534, C535 || CT.C535, C536 || CT.C536], system_chrome.DeviceOrientation);
    },
    get C538() {
      return C538 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$0]: "SystemUiOverlay.top",
        index: 0
      });
    },
    get C539() {
      return C539 = dart.const({
        __proto__: system_chrome.SystemUiOverlay.prototype,
        [_name$0]: "SystemUiOverlay.bottom",
        index: 1
      });
    },
    get C540() {
      return C540 = dart.constList([C538 || CT.C538, C539 || CT.C539], system_chrome.SystemUiOverlay);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name]: "Brightness.dark",
        index: 0
      });
    },
    get C543() {
      return C543 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4278190080.0
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        statusBarIconBrightness: C523 || CT.C523,
        statusBarBrightness: C542 || CT.C542,
        statusBarColor: null,
        systemNavigationBarIconBrightness: C523 || CT.C523,
        systemNavigationBarDividerColor: null,
        systemNavigationBarColor: C543 || CT.C543
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: system_chrome.SystemUiOverlayStyle.prototype,
        statusBarIconBrightness: C542 || CT.C542,
        statusBarBrightness: C523 || CT.C523,
        statusBarColor: null,
        systemNavigationBarIconBrightness: C523 || CT.C523,
        systemNavigationBarDividerColor: null,
        systemNavigationBarColor: C543 || CT.C543
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: system_sound.SystemSoundType.prototype,
        [_name$1]: "SystemSoundType.click",
        index: 0
      });
    },
    get C546() {
      return C546 = dart.constList([C545 || CT.C545], system_sound.SystemSoundType);
    },
    get C547() {
      return C547 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$2]: "KeyboardSide.any",
        index: 0
      });
    },
    get C548() {
      return C548 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$2]: "KeyboardSide.left",
        index: 1
      });
    },
    get C549() {
      return C549 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$2]: "KeyboardSide.right",
        index: 2
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: raw_keyboard.KeyboardSide.prototype,
        [_name$2]: "KeyboardSide.all",
        index: 3
      });
    },
    get C551() {
      return C551 = dart.constList([C547 || CT.C547, C548 || CT.C548, C549 || CT.C549, C550 || CT.C550], raw_keyboard.KeyboardSide);
    },
    get C552() {
      return C552 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.controlModifier",
        index: 0
      });
    },
    get C553() {
      return C553 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.shiftModifier",
        index: 1
      });
    },
    get C554() {
      return C554 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.altModifier",
        index: 2
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.metaModifier",
        index: 3
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.capsLockModifier",
        index: 4
      });
    },
    get C557() {
      return C557 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.numLockModifier",
        index: 5
      });
    },
    get C558() {
      return C558 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.scrollLockModifier",
        index: 6
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.functionModifier",
        index: 7
      });
    },
    get C560() {
      return C560 = dart.const({
        __proto__: raw_keyboard.ModifierKey.prototype,
        [_name$2]: "ModifierKey.symbolModifier",
        index: 8
      });
    },
    get C561() {
      return C561 = dart.constList([C552 || CT.C552, C553 || CT.C553, C554 || CT.C554, C555 || CT.C555, C556 || CT.C556, C557 || CT.C557, C558 || CT.C558, C559 || CT.C559, C560 || CT.C560], raw_keyboard.ModifierKey);
    },
    get C562() {
      return C562 = dart.const({
        __proto__: platform_views._PlatformViewState.prototype,
        [_name$3]: "_PlatformViewState.waitingForSize",
        index: 0
      });
    },
    get C563() {
      return C563 = dart.const({
        __proto__: platform_views._PlatformViewState.prototype,
        [_name$3]: "_PlatformViewState.creating",
        index: 1
      });
    },
    get C564() {
      return C564 = dart.const({
        __proto__: platform_views._PlatformViewState.prototype,
        [_name$3]: "_PlatformViewState.created",
        index: 2
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: platform_views._PlatformViewState.prototype,
        [_name$3]: "_PlatformViewState.createFailed",
        index: 3
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: platform_views._PlatformViewState.prototype,
        [_name$3]: "_PlatformViewState.disposed",
        index: 4
      });
    },
    get C567() {
      return C567 = dart.constList([C562 || CT.C562, C563 || CT.C563, C564 || CT.C564, C565 || CT.C565, C566 || CT.C566], platform_views._PlatformViewState);
    },
    get C568() {
      return C568 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.ltr",
        index: 1
      });
    },
    get C569() {
      return C569 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name]: "TextDirection.rtl",
        index: 0
      });
    }
  });
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
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
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C0;
  let C151;
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C177;
  let C178;
  let C179;
  let C180;
  let C181;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C194;
  let C195;
  let C196;
  let C197;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C221;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C245;
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C150;
  let C318;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C334;
  let C335;
  let C336;
  let C337;
  let C338;
  let C339;
  let C340;
  let C341;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C348;
  let C349;
  let C350;
  let C351;
  let C352;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C365;
  let C366;
  let C367;
  let C368;
  let C369;
  let C370;
  let C371;
  let C372;
  let C373;
  let C374;
  let C375;
  let C376;
  let C377;
  let C378;
  let C379;
  let C380;
  let C381;
  let C382;
  let C383;
  let C384;
  let C385;
  let C386;
  let C387;
  let C388;
  let C389;
  let C390;
  let C391;
  let C392;
  let C393;
  let C394;
  let C395;
  let C396;
  let C397;
  let C398;
  let C399;
  let C400;
  let C401;
  let C402;
  let C403;
  let C319;
  let C405;
  let C406;
  let C407;
  let C408;
  let C409;
  let C410;
  let C411;
  let C412;
  let C413;
  let C414;
  let C415;
  let C416;
  let C417;
  let C418;
  let C419;
  let C420;
  let C421;
  let C422;
  let C423;
  let C424;
  let C425;
  let C426;
  let C427;
  let C428;
  let C429;
  let C430;
  let C431;
  let C432;
  let C433;
  let C434;
  let C435;
  let C436;
  let C437;
  let C438;
  let C439;
  let C440;
  let C441;
  let C442;
  let C443;
  let C444;
  let C445;
  let C446;
  let C447;
  let C448;
  let C449;
  let C450;
  let C451;
  let C452;
  let C453;
  let C454;
  let C455;
  let C456;
  let C457;
  let C458;
  let C459;
  let C460;
  let C461;
  let C462;
  let C463;
  let C464;
  let C465;
  let C466;
  let C467;
  let C468;
  let C469;
  let C470;
  let C404;
  let C471;
  let C472;
  let C473;
  let C474;
  let C475;
  dart.defineLazy(keyboard_maps, {
    /*keyboard_maps.kAndroidToLogicalKey*/get kAndroidToLogicalKey() {
      return C0 || CT.C0;
    },
    /*keyboard_maps.kAndroidToPhysicalKey*/get kAndroidToPhysicalKey() {
      return C150 || CT.C150;
    },
    /*keyboard_maps.kAndroidNumPadMap*/get kAndroidNumPadMap() {
      return C318 || CT.C318;
    },
    /*keyboard_maps.kFuchsiaToLogicalKey*/get kFuchsiaToLogicalKey() {
      return C319 || CT.C319;
    },
    /*keyboard_maps.kFuchsiaToPhysicalKey*/get kFuchsiaToPhysicalKey() {
      return C404 || CT.C404;
    },
    /*keyboard_maps.kMacOsToPhysicalKey*/get kMacOsToPhysicalKey() {
      return C471 || CT.C471;
    },
    /*keyboard_maps.kMacOsNumPadMap*/get kMacOsNumPadMap() {
      return C472 || CT.C472;
    },
    /*keyboard_maps.kGlfwToLogicalKey*/get kGlfwToLogicalKey() {
      return C473 || CT.C473;
    },
    /*keyboard_maps.kGlfwNumpadMap*/get kGlfwNumpadMap() {
      return C474 || CT.C474;
    },
    /*keyboard_maps.kLinuxToPhysicalKey*/get kLinuxToPhysicalKey() {
      return C475 || CT.C475;
    }
  });
  keyboard_key.LogicalKeyboardKey = class LogicalKeyboardKey extends diagnostics.Diagnosticable {
    get keyId() {
      return this[keyId$];
    }
    set keyId(value) {
      super.keyId = value;
    }
    get debugName() {
      return this[debugName$];
    }
    set debugName(value) {
      super.debugName = value;
    }
    get keyLabel() {
      return this[keyLabel$];
    }
    set keyLabel(value) {
      super.keyLabel = value;
    }
    get hashCode() {
      return dart.hashCode(this.keyId);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.LogicalKeyboardKey._check(other);
      return this.keyId == typedOther.keyId;
    }
    static findKeyByKeyId(keyId) {
      return keyboard_key.LogicalKeyboardKey._knownLogicalKeys[$_get](keyId);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("keyId", "0x" + this.keyId[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("keyLabel", this.keyLabel, {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
    static isControlCharacter(label) {
      if (label.length > 1) {
        return false;
      }
      let codeUnit = label[$codeUnitAt](0);
      return codeUnit <= 31 && codeUnit >= 0 || codeUnit >= 127 && codeUnit <= 159;
    }
    get isAutogenerated() {
      return (dart.notNull(this.keyId) & 1099511627776.0) !== 0;
    }
  };
  (keyboard_key.LogicalKeyboardKey.new = function(keyId, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    let keyLabel = opts && 'keyLabel' in opts ? opts.keyLabel : null;
    this[keyId$] = keyId;
    this[debugName$] = debugName;
    this[keyLabel$] = keyLabel;
    if (!(keyId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/keyboard_key.dart", 127, 16, "keyId != null");
    keyboard_key.LogicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.LogicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.LogicalKeyboardKey);
  const keyId$ = Symbol("LogicalKeyboardKey.keyId");
  const debugName$ = Symbol("LogicalKeyboardKey.debugName");
  const keyLabel$ = Symbol("LogicalKeyboardKey.keyLabel");
  dart.setGetterSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getGetters(keyboard_key.LogicalKeyboardKey.__proto__),
    isAutogenerated: core.bool
  }));
  dart.setLibraryUri(keyboard_key.LogicalKeyboardKey, "package:flutter_web/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.LogicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.LogicalKeyboardKey.__proto__),
    keyId: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String),
    keyLabel: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.LogicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.LogicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.LogicalKeyboardKey, {
    /*keyboard_key.LogicalKeyboardKey.valueMask*/get valueMask() {
      return 4294967295.0;
    },
    /*keyboard_key.LogicalKeyboardKey.platformMask*/get platformMask() {
      return 1095216660480.0;
    },
    /*keyboard_key.LogicalKeyboardKey.autogeneratedMask*/get autogeneratedMask() {
      return 1099511627776.0;
    },
    /*keyboard_key.LogicalKeyboardKey.unicodePlane*/get unicodePlane() {
      return 0;
    },
    /*keyboard_key.LogicalKeyboardKey.hidPlane*/get hidPlane() {
      return 4294967296.0;
    },
    /*keyboard_key.LogicalKeyboardKey.none*/get none() {
      return C1 || CT.C1;
    },
    /*keyboard_key.LogicalKeyboardKey.hyper*/get hyper() {
      return C320 || CT.C320;
    },
    /*keyboard_key.LogicalKeyboardKey.superKey*/get superKey() {
      return C321 || CT.C321;
    },
    /*keyboard_key.LogicalKeyboardKey.fn*/get fn() {
      return C2 || CT.C2;
    },
    /*keyboard_key.LogicalKeyboardKey.fnLock*/get fnLock() {
      return C322 || CT.C322;
    },
    /*keyboard_key.LogicalKeyboardKey.suspend*/get suspend() {
      return C323 || CT.C323;
    },
    /*keyboard_key.LogicalKeyboardKey.resume*/get resume() {
      return C324 || CT.C324;
    },
    /*keyboard_key.LogicalKeyboardKey.turbo*/get turbo() {
      return C325 || CT.C325;
    },
    /*keyboard_key.LogicalKeyboardKey.sleep*/get sleep() {
      return C3 || CT.C3;
    },
    /*keyboard_key.LogicalKeyboardKey.wakeUp*/get wakeUp() {
      return C4 || CT.C4;
    },
    /*keyboard_key.LogicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C326 || CT.C326;
    },
    /*keyboard_key.LogicalKeyboardKey.usbReserved*/get usbReserved() {
      return C327 || CT.C327;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C328 || CT.C328;
    },
    /*keyboard_key.LogicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C329 || CT.C329;
    },
    /*keyboard_key.LogicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C330 || CT.C330;
    },
    /*keyboard_key.LogicalKeyboardKey.keyA*/get keyA() {
      return C5 || CT.C5;
    },
    /*keyboard_key.LogicalKeyboardKey.keyB*/get keyB() {
      return C6 || CT.C6;
    },
    /*keyboard_key.LogicalKeyboardKey.keyC*/get keyC() {
      return C7 || CT.C7;
    },
    /*keyboard_key.LogicalKeyboardKey.keyD*/get keyD() {
      return C8 || CT.C8;
    },
    /*keyboard_key.LogicalKeyboardKey.keyE*/get keyE() {
      return C9 || CT.C9;
    },
    /*keyboard_key.LogicalKeyboardKey.keyF*/get keyF() {
      return C10 || CT.C10;
    },
    /*keyboard_key.LogicalKeyboardKey.keyG*/get keyG() {
      return C11 || CT.C11;
    },
    /*keyboard_key.LogicalKeyboardKey.keyH*/get keyH() {
      return C12 || CT.C12;
    },
    /*keyboard_key.LogicalKeyboardKey.keyI*/get keyI() {
      return C13 || CT.C13;
    },
    /*keyboard_key.LogicalKeyboardKey.keyJ*/get keyJ() {
      return C14 || CT.C14;
    },
    /*keyboard_key.LogicalKeyboardKey.keyK*/get keyK() {
      return C15 || CT.C15;
    },
    /*keyboard_key.LogicalKeyboardKey.keyL*/get keyL() {
      return C16 || CT.C16;
    },
    /*keyboard_key.LogicalKeyboardKey.keyM*/get keyM() {
      return C17 || CT.C17;
    },
    /*keyboard_key.LogicalKeyboardKey.keyN*/get keyN() {
      return C18 || CT.C18;
    },
    /*keyboard_key.LogicalKeyboardKey.keyO*/get keyO() {
      return C19 || CT.C19;
    },
    /*keyboard_key.LogicalKeyboardKey.keyP*/get keyP() {
      return C20 || CT.C20;
    },
    /*keyboard_key.LogicalKeyboardKey.keyQ*/get keyQ() {
      return C21 || CT.C21;
    },
    /*keyboard_key.LogicalKeyboardKey.keyR*/get keyR() {
      return C22 || CT.C22;
    },
    /*keyboard_key.LogicalKeyboardKey.keyS*/get keyS() {
      return C23 || CT.C23;
    },
    /*keyboard_key.LogicalKeyboardKey.keyT*/get keyT() {
      return C24 || CT.C24;
    },
    /*keyboard_key.LogicalKeyboardKey.keyU*/get keyU() {
      return C25 || CT.C25;
    },
    /*keyboard_key.LogicalKeyboardKey.keyV*/get keyV() {
      return C26 || CT.C26;
    },
    /*keyboard_key.LogicalKeyboardKey.keyW*/get keyW() {
      return C27 || CT.C27;
    },
    /*keyboard_key.LogicalKeyboardKey.keyX*/get keyX() {
      return C28 || CT.C28;
    },
    /*keyboard_key.LogicalKeyboardKey.keyY*/get keyY() {
      return C29 || CT.C29;
    },
    /*keyboard_key.LogicalKeyboardKey.keyZ*/get keyZ() {
      return C30 || CT.C30;
    },
    /*keyboard_key.LogicalKeyboardKey.digit1*/get digit1() {
      return C31 || CT.C31;
    },
    /*keyboard_key.LogicalKeyboardKey.digit2*/get digit2() {
      return C32 || CT.C32;
    },
    /*keyboard_key.LogicalKeyboardKey.digit3*/get digit3() {
      return C33 || CT.C33;
    },
    /*keyboard_key.LogicalKeyboardKey.digit4*/get digit4() {
      return C34 || CT.C34;
    },
    /*keyboard_key.LogicalKeyboardKey.digit5*/get digit5() {
      return C35 || CT.C35;
    },
    /*keyboard_key.LogicalKeyboardKey.digit6*/get digit6() {
      return C36 || CT.C36;
    },
    /*keyboard_key.LogicalKeyboardKey.digit7*/get digit7() {
      return C37 || CT.C37;
    },
    /*keyboard_key.LogicalKeyboardKey.digit8*/get digit8() {
      return C38 || CT.C38;
    },
    /*keyboard_key.LogicalKeyboardKey.digit9*/get digit9() {
      return C39 || CT.C39;
    },
    /*keyboard_key.LogicalKeyboardKey.digit0*/get digit0() {
      return C40 || CT.C40;
    },
    /*keyboard_key.LogicalKeyboardKey.enter*/get enter() {
      return C41 || CT.C41;
    },
    /*keyboard_key.LogicalKeyboardKey.escape*/get escape() {
      return C42 || CT.C42;
    },
    /*keyboard_key.LogicalKeyboardKey.backspace*/get backspace() {
      return C43 || CT.C43;
    },
    /*keyboard_key.LogicalKeyboardKey.tab*/get tab() {
      return C44 || CT.C44;
    },
    /*keyboard_key.LogicalKeyboardKey.space*/get space() {
      return C45 || CT.C45;
    },
    /*keyboard_key.LogicalKeyboardKey.minus*/get minus() {
      return C46 || CT.C46;
    },
    /*keyboard_key.LogicalKeyboardKey.equal*/get equal() {
      return C47 || CT.C47;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C48 || CT.C48;
    },
    /*keyboard_key.LogicalKeyboardKey.bracketRight*/get bracketRight() {
      return C49 || CT.C49;
    },
    /*keyboard_key.LogicalKeyboardKey.backslash*/get backslash() {
      return C50 || CT.C50;
    },
    /*keyboard_key.LogicalKeyboardKey.semicolon*/get semicolon() {
      return C51 || CT.C51;
    },
    /*keyboard_key.LogicalKeyboardKey.quote*/get quote() {
      return C52 || CT.C52;
    },
    /*keyboard_key.LogicalKeyboardKey.backquote*/get backquote() {
      return C53 || CT.C53;
    },
    /*keyboard_key.LogicalKeyboardKey.comma*/get comma() {
      return C54 || CT.C54;
    },
    /*keyboard_key.LogicalKeyboardKey.period*/get period() {
      return C55 || CT.C55;
    },
    /*keyboard_key.LogicalKeyboardKey.slash*/get slash() {
      return C56 || CT.C56;
    },
    /*keyboard_key.LogicalKeyboardKey.capsLock*/get capsLock() {
      return C57 || CT.C57;
    },
    /*keyboard_key.LogicalKeyboardKey.f1*/get f1() {
      return C58 || CT.C58;
    },
    /*keyboard_key.LogicalKeyboardKey.f2*/get f2() {
      return C59 || CT.C59;
    },
    /*keyboard_key.LogicalKeyboardKey.f3*/get f3() {
      return C60 || CT.C60;
    },
    /*keyboard_key.LogicalKeyboardKey.f4*/get f4() {
      return C61 || CT.C61;
    },
    /*keyboard_key.LogicalKeyboardKey.f5*/get f5() {
      return C62 || CT.C62;
    },
    /*keyboard_key.LogicalKeyboardKey.f6*/get f6() {
      return C63 || CT.C63;
    },
    /*keyboard_key.LogicalKeyboardKey.f7*/get f7() {
      return C64 || CT.C64;
    },
    /*keyboard_key.LogicalKeyboardKey.f8*/get f8() {
      return C65 || CT.C65;
    },
    /*keyboard_key.LogicalKeyboardKey.f9*/get f9() {
      return C66 || CT.C66;
    },
    /*keyboard_key.LogicalKeyboardKey.f10*/get f10() {
      return C67 || CT.C67;
    },
    /*keyboard_key.LogicalKeyboardKey.f11*/get f11() {
      return C68 || CT.C68;
    },
    /*keyboard_key.LogicalKeyboardKey.f12*/get f12() {
      return C69 || CT.C69;
    },
    /*keyboard_key.LogicalKeyboardKey.printScreen*/get printScreen() {
      return C70 || CT.C70;
    },
    /*keyboard_key.LogicalKeyboardKey.scrollLock*/get scrollLock() {
      return C71 || CT.C71;
    },
    /*keyboard_key.LogicalKeyboardKey.pause*/get pause() {
      return C72 || CT.C72;
    },
    /*keyboard_key.LogicalKeyboardKey.insert*/get insert() {
      return C73 || CT.C73;
    },
    /*keyboard_key.LogicalKeyboardKey.home*/get home() {
      return C74 || CT.C74;
    },
    /*keyboard_key.LogicalKeyboardKey.pageUp*/get pageUp() {
      return C75 || CT.C75;
    },
    /*keyboard_key.LogicalKeyboardKey.delete*/get delete() {
      return C76 || CT.C76;
    },
    /*keyboard_key.LogicalKeyboardKey.end*/get end() {
      return C77 || CT.C77;
    },
    /*keyboard_key.LogicalKeyboardKey.pageDown*/get pageDown() {
      return C78 || CT.C78;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowRight*/get arrowRight() {
      return C79 || CT.C79;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C80 || CT.C80;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowDown*/get arrowDown() {
      return C81 || CT.C81;
    },
    /*keyboard_key.LogicalKeyboardKey.arrowUp*/get arrowUp() {
      return C82 || CT.C82;
    },
    /*keyboard_key.LogicalKeyboardKey.numLock*/get numLock() {
      return C83 || CT.C83;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C84 || CT.C84;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C85 || CT.C85;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C86 || CT.C86;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C87 || CT.C87;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C88 || CT.C88;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad1*/get numpad1() {
      return C89 || CT.C89;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad2*/get numpad2() {
      return C90 || CT.C90;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad3*/get numpad3() {
      return C91 || CT.C91;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad4*/get numpad4() {
      return C92 || CT.C92;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad5*/get numpad5() {
      return C93 || CT.C93;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad6*/get numpad6() {
      return C94 || CT.C94;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad7*/get numpad7() {
      return C95 || CT.C95;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad8*/get numpad8() {
      return C96 || CT.C96;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad9*/get numpad9() {
      return C97 || CT.C97;
    },
    /*keyboard_key.LogicalKeyboardKey.numpad0*/get numpad0() {
      return C98 || CT.C98;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C99 || CT.C99;
    },
    /*keyboard_key.LogicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C331 || CT.C331;
    },
    /*keyboard_key.LogicalKeyboardKey.contextMenu*/get contextMenu() {
      return C100 || CT.C100;
    },
    /*keyboard_key.LogicalKeyboardKey.power*/get power() {
      return C101 || CT.C101;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C102 || CT.C102;
    },
    /*keyboard_key.LogicalKeyboardKey.f13*/get f13() {
      return C332 || CT.C332;
    },
    /*keyboard_key.LogicalKeyboardKey.f14*/get f14() {
      return C333 || CT.C333;
    },
    /*keyboard_key.LogicalKeyboardKey.f15*/get f15() {
      return C334 || CT.C334;
    },
    /*keyboard_key.LogicalKeyboardKey.f16*/get f16() {
      return C335 || CT.C335;
    },
    /*keyboard_key.LogicalKeyboardKey.f17*/get f17() {
      return C336 || CT.C336;
    },
    /*keyboard_key.LogicalKeyboardKey.f18*/get f18() {
      return C337 || CT.C337;
    },
    /*keyboard_key.LogicalKeyboardKey.f19*/get f19() {
      return C338 || CT.C338;
    },
    /*keyboard_key.LogicalKeyboardKey.f20*/get f20() {
      return C339 || CT.C339;
    },
    /*keyboard_key.LogicalKeyboardKey.f21*/get f21() {
      return C340 || CT.C340;
    },
    /*keyboard_key.LogicalKeyboardKey.f22*/get f22() {
      return C341 || CT.C341;
    },
    /*keyboard_key.LogicalKeyboardKey.f23*/get f23() {
      return C342 || CT.C342;
    },
    /*keyboard_key.LogicalKeyboardKey.f24*/get f24() {
      return C343 || CT.C343;
    },
    /*keyboard_key.LogicalKeyboardKey.open*/get open() {
      return C344 || CT.C344;
    },
    /*keyboard_key.LogicalKeyboardKey.help*/get help() {
      return C103 || CT.C103;
    },
    /*keyboard_key.LogicalKeyboardKey.select*/get select() {
      return C345 || CT.C345;
    },
    /*keyboard_key.LogicalKeyboardKey.again*/get again() {
      return C346 || CT.C346;
    },
    /*keyboard_key.LogicalKeyboardKey.undo*/get undo() {
      return C347 || CT.C347;
    },
    /*keyboard_key.LogicalKeyboardKey.cut*/get cut() {
      return C104 || CT.C104;
    },
    /*keyboard_key.LogicalKeyboardKey.copy*/get copy() {
      return C105 || CT.C105;
    },
    /*keyboard_key.LogicalKeyboardKey.paste*/get paste() {
      return C106 || CT.C106;
    },
    /*keyboard_key.LogicalKeyboardKey.find*/get find() {
      return C348 || CT.C348;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C107 || CT.C107;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C108 || CT.C108;
    },
    /*keyboard_key.LogicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C109 || CT.C109;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadComma*/get numpadComma() {
      return C110 || CT.C110;
    },
    /*keyboard_key.LogicalKeyboardKey.intlRo*/get intlRo() {
      return C349 || CT.C349;
    },
    /*keyboard_key.LogicalKeyboardKey.kanaMode*/get kanaMode() {
      return C350 || CT.C350;
    },
    /*keyboard_key.LogicalKeyboardKey.intlYen*/get intlYen() {
      return C351 || CT.C351;
    },
    /*keyboard_key.LogicalKeyboardKey.convert*/get convert() {
      return C111 || CT.C111;
    },
    /*keyboard_key.LogicalKeyboardKey.nonConvert*/get nonConvert() {
      return C112 || CT.C112;
    },
    /*keyboard_key.LogicalKeyboardKey.lang1*/get lang1() {
      return C352 || CT.C352;
    },
    /*keyboard_key.LogicalKeyboardKey.lang2*/get lang2() {
      return C353 || CT.C353;
    },
    /*keyboard_key.LogicalKeyboardKey.lang3*/get lang3() {
      return C354 || CT.C354;
    },
    /*keyboard_key.LogicalKeyboardKey.lang4*/get lang4() {
      return C355 || CT.C355;
    },
    /*keyboard_key.LogicalKeyboardKey.lang5*/get lang5() {
      return C356 || CT.C356;
    },
    /*keyboard_key.LogicalKeyboardKey.abort*/get abort() {
      return C357 || CT.C357;
    },
    /*keyboard_key.LogicalKeyboardKey.props*/get props() {
      return C358 || CT.C358;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C113 || CT.C113;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C114 || CT.C114;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C359 || CT.C359;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C360 || CT.C360;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C361 || CT.C361;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C362 || CT.C362;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C363 || CT.C363;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C364 || CT.C364;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C365 || CT.C365;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClear*/get numpadClear() {
      return C366 || CT.C366;
    },
    /*keyboard_key.LogicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C367 || CT.C367;
    },
    /*keyboard_key.LogicalKeyboardKey.controlLeft*/get controlLeft() {
      return C115 || CT.C115;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C116 || CT.C116;
    },
    /*keyboard_key.LogicalKeyboardKey.altLeft*/get altLeft() {
      return C117 || CT.C117;
    },
    /*keyboard_key.LogicalKeyboardKey.metaLeft*/get metaLeft() {
      return C118 || CT.C118;
    },
    /*keyboard_key.LogicalKeyboardKey.controlRight*/get controlRight() {
      return C119 || CT.C119;
    },
    /*keyboard_key.LogicalKeyboardKey.shiftRight*/get shiftRight() {
      return C120 || CT.C120;
    },
    /*keyboard_key.LogicalKeyboardKey.altRight*/get altRight() {
      return C121 || CT.C121;
    },
    /*keyboard_key.LogicalKeyboardKey.metaRight*/get metaRight() {
      return C122 || CT.C122;
    },
    /*keyboard_key.LogicalKeyboardKey.info*/get info() {
      return C123 || CT.C123;
    },
    /*keyboard_key.LogicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C124 || CT.C124;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C125 || CT.C125;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C126 || CT.C126;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C368 || CT.C368;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C369 || CT.C369;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C370 || CT.C370;
    },
    /*keyboard_key.LogicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C371 || CT.C371;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaLast*/get mediaLast() {
      return C127 || CT.C127;
    },
    /*keyboard_key.LogicalKeyboardKey.launchPhone*/get launchPhone() {
      return C372 || CT.C372;
    },
    /*keyboard_key.LogicalKeyboardKey.programGuide*/get programGuide() {
      return C373 || CT.C373;
    },
    /*keyboard_key.LogicalKeyboardKey.exit*/get exit() {
      return C374 || CT.C374;
    },
    /*keyboard_key.LogicalKeyboardKey.channelUp*/get channelUp() {
      return C128 || CT.C128;
    },
    /*keyboard_key.LogicalKeyboardKey.channelDown*/get channelDown() {
      return C129 || CT.C129;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C130 || CT.C130;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C131 || CT.C131;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C132 || CT.C132;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C133 || CT.C133;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C134 || CT.C134;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C135 || CT.C135;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaStop*/get mediaStop() {
      return C136 || CT.C136;
    },
    /*keyboard_key.LogicalKeyboardKey.eject*/get eject() {
      return C137 || CT.C137;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C138 || CT.C138;
    },
    /*keyboard_key.LogicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C375 || CT.C375;
    },
    /*keyboard_key.LogicalKeyboardKey.bassBoost*/get bassBoost() {
      return C376 || CT.C376;
    },
    /*keyboard_key.LogicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C377 || CT.C377;
    },
    /*keyboard_key.LogicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C378 || CT.C378;
    },
    /*keyboard_key.LogicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C379 || CT.C379;
    },
    /*keyboard_key.LogicalKeyboardKey.launchMail*/get launchMail() {
      return C139 || CT.C139;
    },
    /*keyboard_key.LogicalKeyboardKey.launchContacts*/get launchContacts() {
      return C140 || CT.C140;
    },
    /*keyboard_key.LogicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C141 || CT.C141;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp2*/get launchApp2() {
      return C380 || CT.C380;
    },
    /*keyboard_key.LogicalKeyboardKey.launchApp1*/get launchApp1() {
      return C381 || CT.C381;
    },
    /*keyboard_key.LogicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C382 || CT.C382;
    },
    /*keyboard_key.LogicalKeyboardKey.logOff*/get logOff() {
      return C383 || CT.C383;
    },
    /*keyboard_key.LogicalKeyboardKey.lockScreen*/get lockScreen() {
      return C384 || CT.C384;
    },
    /*keyboard_key.LogicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C385 || CT.C385;
    },
    /*keyboard_key.LogicalKeyboardKey.selectTask*/get selectTask() {
      return C386 || CT.C386;
    },
    /*keyboard_key.LogicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C387 || CT.C387;
    },
    /*keyboard_key.LogicalKeyboardKey.spellCheck*/get spellCheck() {
      return C388 || CT.C388;
    },
    /*keyboard_key.LogicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C389 || CT.C389;
    },
    /*keyboard_key.LogicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C390 || CT.C390;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C142 || CT.C142;
    },
    /*keyboard_key.LogicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C391 || CT.C391;
    },
    /*keyboard_key.LogicalKeyboardKey.newKey*/get newKey() {
      return C392 || CT.C392;
    },
    /*keyboard_key.LogicalKeyboardKey.close*/get close() {
      return C143 || CT.C143;
    },
    /*keyboard_key.LogicalKeyboardKey.save*/get save() {
      return C393 || CT.C393;
    },
    /*keyboard_key.LogicalKeyboardKey.print*/get print() {
      return C394 || CT.C394;
    },
    /*keyboard_key.LogicalKeyboardKey.browserSearch*/get browserSearch() {
      return C144 || CT.C144;
    },
    /*keyboard_key.LogicalKeyboardKey.browserHome*/get browserHome() {
      return C395 || CT.C395;
    },
    /*keyboard_key.LogicalKeyboardKey.browserBack*/get browserBack() {
      return C396 || CT.C396;
    },
    /*keyboard_key.LogicalKeyboardKey.browserForward*/get browserForward() {
      return C145 || CT.C145;
    },
    /*keyboard_key.LogicalKeyboardKey.browserStop*/get browserStop() {
      return C397 || CT.C397;
    },
    /*keyboard_key.LogicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C398 || CT.C398;
    },
    /*keyboard_key.LogicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C146 || CT.C146;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomIn*/get zoomIn() {
      return C147 || CT.C147;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomOut*/get zoomOut() {
      return C148 || CT.C148;
    },
    /*keyboard_key.LogicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C149 || CT.C149;
    },
    /*keyboard_key.LogicalKeyboardKey.redo*/get redo() {
      return C399 || CT.C399;
    },
    /*keyboard_key.LogicalKeyboardKey.mailReply*/get mailReply() {
      return C400 || CT.C400;
    },
    /*keyboard_key.LogicalKeyboardKey.mailForward*/get mailForward() {
      return C401 || CT.C401;
    },
    /*keyboard_key.LogicalKeyboardKey.mailSend*/get mailSend() {
      return C402 || CT.C402;
    },
    /*keyboard_key.LogicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C403 || CT.C403;
    },
    /*keyboard_key.LogicalKeyboardKey._knownLogicalKeys*/get _knownLogicalKeys() {
      return C319 || CT.C319;
    }
  });
  keyboard_key.PhysicalKeyboardKey = class PhysicalKeyboardKey extends diagnostics.Diagnosticable {
    get usbHidUsage() {
      return this[usbHidUsage$];
    }
    set usbHidUsage(value) {
      super.usbHidUsage = value;
    }
    get debugName() {
      return this[debugName$0];
    }
    set debugName(value) {
      super.debugName = value;
    }
    static findKeyByCode(usageCode) {
      return keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys[$_get](usageCode);
    }
    get hashCode() {
      return dart.hashCode(this.usbHidUsage);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let typedOther = keyboard_key.PhysicalKeyboardKey._check(other);
      return this.usbHidUsage == typedOther.usbHidUsage;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("usbHidUsage", "0x" + this.usbHidUsage[$toRadixString](16)[$padLeft](8, "0"), {showName: true}));
      properties.add(new diagnostics.StringProperty.new("debugName", this.debugName, {showName: true, defaultValue: null}));
    }
  };
  (keyboard_key.PhysicalKeyboardKey.new = function(usbHidUsage, opts) {
    let debugName = opts && 'debugName' in opts ? opts.debugName : null;
    this[usbHidUsage$] = usbHidUsage;
    this[debugName$0] = debugName;
    if (!(usbHidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/keyboard_key.dart", 2076, 16, ")\r\n      : assert(u");
    keyboard_key.PhysicalKeyboardKey.__proto__.new.call(this);
    ;
  }).prototype = keyboard_key.PhysicalKeyboardKey.prototype;
  dart.addTypeTests(keyboard_key.PhysicalKeyboardKey);
  const usbHidUsage$ = Symbol("PhysicalKeyboardKey.usbHidUsage");
  const debugName$0 = Symbol("PhysicalKeyboardKey.debugName");
  dart.setLibraryUri(keyboard_key.PhysicalKeyboardKey, "package:flutter_web/src/services/keyboard_key.dart");
  dart.setFieldSignature(keyboard_key.PhysicalKeyboardKey, () => ({
    __proto__: dart.getFields(keyboard_key.PhysicalKeyboardKey.__proto__),
    usbHidUsage: dart.finalFieldType(core.int),
    debugName: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyboard_key.PhysicalKeyboardKey, ['_equals']);
  dart.defineExtensionAccessors(keyboard_key.PhysicalKeyboardKey, ['hashCode']);
  dart.defineLazy(keyboard_key.PhysicalKeyboardKey, {
    /*keyboard_key.PhysicalKeyboardKey.none*/get none() {
      return C405 || CT.C405;
    },
    /*keyboard_key.PhysicalKeyboardKey.hyper*/get hyper() {
      return C406 || CT.C406;
    },
    /*keyboard_key.PhysicalKeyboardKey.superKey*/get superKey() {
      return C407 || CT.C407;
    },
    /*keyboard_key.PhysicalKeyboardKey.fn*/get fn() {
      return C151 || CT.C151;
    },
    /*keyboard_key.PhysicalKeyboardKey.fnLock*/get fnLock() {
      return C408 || CT.C408;
    },
    /*keyboard_key.PhysicalKeyboardKey.suspend*/get suspend() {
      return C152 || CT.C152;
    },
    /*keyboard_key.PhysicalKeyboardKey.resume*/get resume() {
      return C409 || CT.C409;
    },
    /*keyboard_key.PhysicalKeyboardKey.turbo*/get turbo() {
      return C410 || CT.C410;
    },
    /*keyboard_key.PhysicalKeyboardKey.sleep*/get sleep() {
      return C153 || CT.C153;
    },
    /*keyboard_key.PhysicalKeyboardKey.wakeUp*/get wakeUp() {
      return C154 || CT.C154;
    },
    /*keyboard_key.PhysicalKeyboardKey.displayToggleIntExt*/get displayToggleIntExt() {
      return C411 || CT.C411;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbReserved*/get usbReserved() {
      return C412 || CT.C412;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorRollOver*/get usbErrorRollOver() {
      return C413 || CT.C413;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbPostFail*/get usbPostFail() {
      return C414 || CT.C414;
    },
    /*keyboard_key.PhysicalKeyboardKey.usbErrorUndefined*/get usbErrorUndefined() {
      return C415 || CT.C415;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyA*/get keyA() {
      return C155 || CT.C155;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyB*/get keyB() {
      return C156 || CT.C156;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyC*/get keyC() {
      return C157 || CT.C157;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyD*/get keyD() {
      return C158 || CT.C158;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyE*/get keyE() {
      return C159 || CT.C159;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyF*/get keyF() {
      return C160 || CT.C160;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyG*/get keyG() {
      return C161 || CT.C161;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyH*/get keyH() {
      return C162 || CT.C162;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyI*/get keyI() {
      return C163 || CT.C163;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyJ*/get keyJ() {
      return C164 || CT.C164;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyK*/get keyK() {
      return C165 || CT.C165;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyL*/get keyL() {
      return C166 || CT.C166;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyM*/get keyM() {
      return C167 || CT.C167;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyN*/get keyN() {
      return C168 || CT.C168;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyO*/get keyO() {
      return C169 || CT.C169;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyP*/get keyP() {
      return C170 || CT.C170;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyQ*/get keyQ() {
      return C171 || CT.C171;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyR*/get keyR() {
      return C172 || CT.C172;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyS*/get keyS() {
      return C173 || CT.C173;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyT*/get keyT() {
      return C174 || CT.C174;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyU*/get keyU() {
      return C175 || CT.C175;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyV*/get keyV() {
      return C176 || CT.C176;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyW*/get keyW() {
      return C177 || CT.C177;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyX*/get keyX() {
      return C178 || CT.C178;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyY*/get keyY() {
      return C179 || CT.C179;
    },
    /*keyboard_key.PhysicalKeyboardKey.keyZ*/get keyZ() {
      return C180 || CT.C180;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit1*/get digit1() {
      return C181 || CT.C181;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit2*/get digit2() {
      return C182 || CT.C182;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit3*/get digit3() {
      return C183 || CT.C183;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit4*/get digit4() {
      return C184 || CT.C184;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit5*/get digit5() {
      return C185 || CT.C185;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit6*/get digit6() {
      return C186 || CT.C186;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit7*/get digit7() {
      return C187 || CT.C187;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit8*/get digit8() {
      return C188 || CT.C188;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit9*/get digit9() {
      return C189 || CT.C189;
    },
    /*keyboard_key.PhysicalKeyboardKey.digit0*/get digit0() {
      return C190 || CT.C190;
    },
    /*keyboard_key.PhysicalKeyboardKey.enter*/get enter() {
      return C191 || CT.C191;
    },
    /*keyboard_key.PhysicalKeyboardKey.escape*/get escape() {
      return C192 || CT.C192;
    },
    /*keyboard_key.PhysicalKeyboardKey.backspace*/get backspace() {
      return C193 || CT.C193;
    },
    /*keyboard_key.PhysicalKeyboardKey.tab*/get tab() {
      return C194 || CT.C194;
    },
    /*keyboard_key.PhysicalKeyboardKey.space*/get space() {
      return C195 || CT.C195;
    },
    /*keyboard_key.PhysicalKeyboardKey.minus*/get minus() {
      return C196 || CT.C196;
    },
    /*keyboard_key.PhysicalKeyboardKey.equal*/get equal() {
      return C197 || CT.C197;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketLeft*/get bracketLeft() {
      return C198 || CT.C198;
    },
    /*keyboard_key.PhysicalKeyboardKey.bracketRight*/get bracketRight() {
      return C199 || CT.C199;
    },
    /*keyboard_key.PhysicalKeyboardKey.backslash*/get backslash() {
      return C200 || CT.C200;
    },
    /*keyboard_key.PhysicalKeyboardKey.semicolon*/get semicolon() {
      return C201 || CT.C201;
    },
    /*keyboard_key.PhysicalKeyboardKey.quote*/get quote() {
      return C202 || CT.C202;
    },
    /*keyboard_key.PhysicalKeyboardKey.backquote*/get backquote() {
      return C203 || CT.C203;
    },
    /*keyboard_key.PhysicalKeyboardKey.comma*/get comma() {
      return C204 || CT.C204;
    },
    /*keyboard_key.PhysicalKeyboardKey.period*/get period() {
      return C205 || CT.C205;
    },
    /*keyboard_key.PhysicalKeyboardKey.slash*/get slash() {
      return C206 || CT.C206;
    },
    /*keyboard_key.PhysicalKeyboardKey.capsLock*/get capsLock() {
      return C207 || CT.C207;
    },
    /*keyboard_key.PhysicalKeyboardKey.f1*/get f1() {
      return C208 || CT.C208;
    },
    /*keyboard_key.PhysicalKeyboardKey.f2*/get f2() {
      return C209 || CT.C209;
    },
    /*keyboard_key.PhysicalKeyboardKey.f3*/get f3() {
      return C210 || CT.C210;
    },
    /*keyboard_key.PhysicalKeyboardKey.f4*/get f4() {
      return C211 || CT.C211;
    },
    /*keyboard_key.PhysicalKeyboardKey.f5*/get f5() {
      return C212 || CT.C212;
    },
    /*keyboard_key.PhysicalKeyboardKey.f6*/get f6() {
      return C213 || CT.C213;
    },
    /*keyboard_key.PhysicalKeyboardKey.f7*/get f7() {
      return C214 || CT.C214;
    },
    /*keyboard_key.PhysicalKeyboardKey.f8*/get f8() {
      return C215 || CT.C215;
    },
    /*keyboard_key.PhysicalKeyboardKey.f9*/get f9() {
      return C216 || CT.C216;
    },
    /*keyboard_key.PhysicalKeyboardKey.f10*/get f10() {
      return C217 || CT.C217;
    },
    /*keyboard_key.PhysicalKeyboardKey.f11*/get f11() {
      return C218 || CT.C218;
    },
    /*keyboard_key.PhysicalKeyboardKey.f12*/get f12() {
      return C219 || CT.C219;
    },
    /*keyboard_key.PhysicalKeyboardKey.printScreen*/get printScreen() {
      return C220 || CT.C220;
    },
    /*keyboard_key.PhysicalKeyboardKey.scrollLock*/get scrollLock() {
      return C221 || CT.C221;
    },
    /*keyboard_key.PhysicalKeyboardKey.pause*/get pause() {
      return C222 || CT.C222;
    },
    /*keyboard_key.PhysicalKeyboardKey.insert*/get insert() {
      return C223 || CT.C223;
    },
    /*keyboard_key.PhysicalKeyboardKey.home*/get home() {
      return C224 || CT.C224;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageUp*/get pageUp() {
      return C225 || CT.C225;
    },
    /*keyboard_key.PhysicalKeyboardKey.delete*/get delete() {
      return C226 || CT.C226;
    },
    /*keyboard_key.PhysicalKeyboardKey.end*/get end() {
      return C227 || CT.C227;
    },
    /*keyboard_key.PhysicalKeyboardKey.pageDown*/get pageDown() {
      return C228 || CT.C228;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowRight*/get arrowRight() {
      return C229 || CT.C229;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowLeft*/get arrowLeft() {
      return C230 || CT.C230;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowDown*/get arrowDown() {
      return C231 || CT.C231;
    },
    /*keyboard_key.PhysicalKeyboardKey.arrowUp*/get arrowUp() {
      return C232 || CT.C232;
    },
    /*keyboard_key.PhysicalKeyboardKey.numLock*/get numLock() {
      return C233 || CT.C233;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDivide*/get numpadDivide() {
      return C234 || CT.C234;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMultiply*/get numpadMultiply() {
      return C235 || CT.C235;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSubtract*/get numpadSubtract() {
      return C236 || CT.C236;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadAdd*/get numpadAdd() {
      return C237 || CT.C237;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEnter*/get numpadEnter() {
      return C238 || CT.C238;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad1*/get numpad1() {
      return C239 || CT.C239;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad2*/get numpad2() {
      return C240 || CT.C240;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad3*/get numpad3() {
      return C241 || CT.C241;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad4*/get numpad4() {
      return C242 || CT.C242;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad5*/get numpad5() {
      return C243 || CT.C243;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad6*/get numpad6() {
      return C244 || CT.C244;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad7*/get numpad7() {
      return C245 || CT.C245;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad8*/get numpad8() {
      return C246 || CT.C246;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad9*/get numpad9() {
      return C247 || CT.C247;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpad0*/get numpad0() {
      return C248 || CT.C248;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadDecimal*/get numpadDecimal() {
      return C249 || CT.C249;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlBackslash*/get intlBackslash() {
      return C416 || CT.C416;
    },
    /*keyboard_key.PhysicalKeyboardKey.contextMenu*/get contextMenu() {
      return C250 || CT.C250;
    },
    /*keyboard_key.PhysicalKeyboardKey.power*/get power() {
      return C251 || CT.C251;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadEqual*/get numpadEqual() {
      return C252 || CT.C252;
    },
    /*keyboard_key.PhysicalKeyboardKey.f13*/get f13() {
      return C253 || CT.C253;
    },
    /*keyboard_key.PhysicalKeyboardKey.f14*/get f14() {
      return C254 || CT.C254;
    },
    /*keyboard_key.PhysicalKeyboardKey.f15*/get f15() {
      return C255 || CT.C255;
    },
    /*keyboard_key.PhysicalKeyboardKey.f16*/get f16() {
      return C256 || CT.C256;
    },
    /*keyboard_key.PhysicalKeyboardKey.f17*/get f17() {
      return C257 || CT.C257;
    },
    /*keyboard_key.PhysicalKeyboardKey.f18*/get f18() {
      return C258 || CT.C258;
    },
    /*keyboard_key.PhysicalKeyboardKey.f19*/get f19() {
      return C259 || CT.C259;
    },
    /*keyboard_key.PhysicalKeyboardKey.f20*/get f20() {
      return C260 || CT.C260;
    },
    /*keyboard_key.PhysicalKeyboardKey.f21*/get f21() {
      return C261 || CT.C261;
    },
    /*keyboard_key.PhysicalKeyboardKey.f22*/get f22() {
      return C262 || CT.C262;
    },
    /*keyboard_key.PhysicalKeyboardKey.f23*/get f23() {
      return C263 || CT.C263;
    },
    /*keyboard_key.PhysicalKeyboardKey.f24*/get f24() {
      return C264 || CT.C264;
    },
    /*keyboard_key.PhysicalKeyboardKey.open*/get open() {
      return C265 || CT.C265;
    },
    /*keyboard_key.PhysicalKeyboardKey.help*/get help() {
      return C266 || CT.C266;
    },
    /*keyboard_key.PhysicalKeyboardKey.select*/get select() {
      return C417 || CT.C417;
    },
    /*keyboard_key.PhysicalKeyboardKey.again*/get again() {
      return C267 || CT.C267;
    },
    /*keyboard_key.PhysicalKeyboardKey.undo*/get undo() {
      return C268 || CT.C268;
    },
    /*keyboard_key.PhysicalKeyboardKey.cut*/get cut() {
      return C269 || CT.C269;
    },
    /*keyboard_key.PhysicalKeyboardKey.copy*/get copy() {
      return C270 || CT.C270;
    },
    /*keyboard_key.PhysicalKeyboardKey.paste*/get paste() {
      return C271 || CT.C271;
    },
    /*keyboard_key.PhysicalKeyboardKey.find*/get find() {
      return C272 || CT.C272;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeMute*/get audioVolumeMute() {
      return C273 || CT.C273;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeUp*/get audioVolumeUp() {
      return C274 || CT.C274;
    },
    /*keyboard_key.PhysicalKeyboardKey.audioVolumeDown*/get audioVolumeDown() {
      return C275 || CT.C275;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadComma*/get numpadComma() {
      return C276 || CT.C276;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlRo*/get intlRo() {
      return C418 || CT.C418;
    },
    /*keyboard_key.PhysicalKeyboardKey.kanaMode*/get kanaMode() {
      return C419 || CT.C419;
    },
    /*keyboard_key.PhysicalKeyboardKey.intlYen*/get intlYen() {
      return C420 || CT.C420;
    },
    /*keyboard_key.PhysicalKeyboardKey.convert*/get convert() {
      return C277 || CT.C277;
    },
    /*keyboard_key.PhysicalKeyboardKey.nonConvert*/get nonConvert() {
      return C278 || CT.C278;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang1*/get lang1() {
      return C421 || CT.C421;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang2*/get lang2() {
      return C422 || CT.C422;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang3*/get lang3() {
      return C279 || CT.C279;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang4*/get lang4() {
      return C280 || CT.C280;
    },
    /*keyboard_key.PhysicalKeyboardKey.lang5*/get lang5() {
      return C423 || CT.C423;
    },
    /*keyboard_key.PhysicalKeyboardKey.abort*/get abort() {
      return C424 || CT.C424;
    },
    /*keyboard_key.PhysicalKeyboardKey.props*/get props() {
      return C281 || CT.C281;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenLeft*/get numpadParenLeft() {
      return C282 || CT.C282;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadParenRight*/get numpadParenRight() {
      return C283 || CT.C283;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadBackspace*/get numpadBackspace() {
      return C425 || CT.C425;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryStore*/get numpadMemoryStore() {
      return C426 || CT.C426;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryRecall*/get numpadMemoryRecall() {
      return C427 || CT.C427;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryClear*/get numpadMemoryClear() {
      return C428 || CT.C428;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemoryAdd*/get numpadMemoryAdd() {
      return C429 || CT.C429;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadMemorySubtract*/get numpadMemorySubtract() {
      return C430 || CT.C430;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadSignChange*/get numpadSignChange() {
      return C431 || CT.C431;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClear*/get numpadClear() {
      return C432 || CT.C432;
    },
    /*keyboard_key.PhysicalKeyboardKey.numpadClearEntry*/get numpadClearEntry() {
      return C433 || CT.C433;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlLeft*/get controlLeft() {
      return C284 || CT.C284;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftLeft*/get shiftLeft() {
      return C285 || CT.C285;
    },
    /*keyboard_key.PhysicalKeyboardKey.altLeft*/get altLeft() {
      return C286 || CT.C286;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaLeft*/get metaLeft() {
      return C287 || CT.C287;
    },
    /*keyboard_key.PhysicalKeyboardKey.controlRight*/get controlRight() {
      return C288 || CT.C288;
    },
    /*keyboard_key.PhysicalKeyboardKey.shiftRight*/get shiftRight() {
      return C289 || CT.C289;
    },
    /*keyboard_key.PhysicalKeyboardKey.altRight*/get altRight() {
      return C290 || CT.C290;
    },
    /*keyboard_key.PhysicalKeyboardKey.metaRight*/get metaRight() {
      return C291 || CT.C291;
    },
    /*keyboard_key.PhysicalKeyboardKey.info*/get info() {
      return C292 || CT.C292;
    },
    /*keyboard_key.PhysicalKeyboardKey.closedCaptionToggle*/get closedCaptionToggle() {
      return C434 || CT.C434;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessUp*/get brightnessUp() {
      return C293 || CT.C293;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessDown*/get brightnessDown() {
      return C294 || CT.C294;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessToggle*/get brightnessToggle() {
      return C435 || CT.C435;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMinimum*/get brightnessMinimum() {
      return C436 || CT.C436;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessMaximum*/get brightnessMaximum() {
      return C437 || CT.C437;
    },
    /*keyboard_key.PhysicalKeyboardKey.brightnessAuto*/get brightnessAuto() {
      return C438 || CT.C438;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaLast*/get mediaLast() {
      return C439 || CT.C439;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchPhone*/get launchPhone() {
      return C440 || CT.C440;
    },
    /*keyboard_key.PhysicalKeyboardKey.programGuide*/get programGuide() {
      return C441 || CT.C441;
    },
    /*keyboard_key.PhysicalKeyboardKey.exit*/get exit() {
      return C295 || CT.C295;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelUp*/get channelUp() {
      return C296 || CT.C296;
    },
    /*keyboard_key.PhysicalKeyboardKey.channelDown*/get channelDown() {
      return C297 || CT.C297;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlay*/get mediaPlay() {
      return C298 || CT.C298;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRecord*/get mediaRecord() {
      return C299 || CT.C299;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaFastForward*/get mediaFastForward() {
      return C300 || CT.C300;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaRewind*/get mediaRewind() {
      return C301 || CT.C301;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackNext*/get mediaTrackNext() {
      return C302 || CT.C302;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaTrackPrevious*/get mediaTrackPrevious() {
      return C303 || CT.C303;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaStop*/get mediaStop() {
      return C304 || CT.C304;
    },
    /*keyboard_key.PhysicalKeyboardKey.eject*/get eject() {
      return C305 || CT.C305;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaPlayPause*/get mediaPlayPause() {
      return C306 || CT.C306;
    },
    /*keyboard_key.PhysicalKeyboardKey.speechInputToggle*/get speechInputToggle() {
      return C442 || CT.C442;
    },
    /*keyboard_key.PhysicalKeyboardKey.bassBoost*/get bassBoost() {
      return C307 || CT.C307;
    },
    /*keyboard_key.PhysicalKeyboardKey.mediaSelect*/get mediaSelect() {
      return C443 || CT.C443;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchWordProcessor*/get launchWordProcessor() {
      return C444 || CT.C444;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchSpreadsheet*/get launchSpreadsheet() {
      return C445 || CT.C445;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchMail*/get launchMail() {
      return C308 || CT.C308;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchContacts*/get launchContacts() {
      return C309 || CT.C309;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchCalendar*/get launchCalendar() {
      return C310 || CT.C310;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp2*/get launchApp2() {
      return C446 || CT.C446;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchApp1*/get launchApp1() {
      return C447 || CT.C447;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchInternetBrowser*/get launchInternetBrowser() {
      return C448 || CT.C448;
    },
    /*keyboard_key.PhysicalKeyboardKey.logOff*/get logOff() {
      return C449 || CT.C449;
    },
    /*keyboard_key.PhysicalKeyboardKey.lockScreen*/get lockScreen() {
      return C450 || CT.C450;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchControlPanel*/get launchControlPanel() {
      return C451 || CT.C451;
    },
    /*keyboard_key.PhysicalKeyboardKey.selectTask*/get selectTask() {
      return C452 || CT.C452;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchDocuments*/get launchDocuments() {
      return C453 || CT.C453;
    },
    /*keyboard_key.PhysicalKeyboardKey.spellCheck*/get spellCheck() {
      return C454 || CT.C454;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchKeyboardLayout*/get launchKeyboardLayout() {
      return C455 || CT.C455;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchScreenSaver*/get launchScreenSaver() {
      return C456 || CT.C456;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAssistant*/get launchAssistant() {
      return C457 || CT.C457;
    },
    /*keyboard_key.PhysicalKeyboardKey.launchAudioBrowser*/get launchAudioBrowser() {
      return C458 || CT.C458;
    },
    /*keyboard_key.PhysicalKeyboardKey.newKey*/get newKey() {
      return C311 || CT.C311;
    },
    /*keyboard_key.PhysicalKeyboardKey.close*/get close() {
      return C312 || CT.C312;
    },
    /*keyboard_key.PhysicalKeyboardKey.save*/get save() {
      return C459 || CT.C459;
    },
    /*keyboard_key.PhysicalKeyboardKey.print*/get print() {
      return C313 || CT.C313;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserSearch*/get browserSearch() {
      return C314 || CT.C314;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserHome*/get browserHome() {
      return C460 || CT.C460;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserBack*/get browserBack() {
      return C461 || CT.C461;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserForward*/get browserForward() {
      return C315 || CT.C315;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserStop*/get browserStop() {
      return C462 || CT.C462;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserRefresh*/get browserRefresh() {
      return C463 || CT.C463;
    },
    /*keyboard_key.PhysicalKeyboardKey.browserFavorites*/get browserFavorites() {
      return C316 || CT.C316;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomIn*/get zoomIn() {
      return C464 || CT.C464;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomOut*/get zoomOut() {
      return C465 || CT.C465;
    },
    /*keyboard_key.PhysicalKeyboardKey.zoomToggle*/get zoomToggle() {
      return C466 || CT.C466;
    },
    /*keyboard_key.PhysicalKeyboardKey.redo*/get redo() {
      return C317 || CT.C317;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailReply*/get mailReply() {
      return C467 || CT.C467;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailForward*/get mailForward() {
      return C468 || CT.C468;
    },
    /*keyboard_key.PhysicalKeyboardKey.mailSend*/get mailSend() {
      return C469 || CT.C469;
    },
    /*keyboard_key.PhysicalKeyboardKey.showAllWindows*/get showAllWindows() {
      return C470 || CT.C470;
    },
    /*keyboard_key.PhysicalKeyboardKey._knownPhysicalKeys*/get _knownPhysicalKeys() {
      return C404 || CT.C404;
    }
  });
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  platform_channel.BasicMessageChannel$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      send(message) {
        T._check(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield platform_messages.BinaryMessages.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          platform_messages.BinaryMessages.setMessageHandler(this.name, null);
        } else {
          platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
      setMockMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          platform_messages.BinaryMessages.setMockMessageHandler(this.name, null);
        } else {
          platform_messages.BinaryMessages.setMockMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec) {
      this[name$] = name;
      this[codec$] = codec;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    const name$ = Symbol("BasicMessageChannel.name");
    const codec$ = Symbol("BasicMessageChannel.codec");
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [core.Object]),
      setMessageHandler: dart.fnType(dart.void, [core.Object]),
      setMockMessageHandler: dart.fnType(dart.void, [core.Object])
    }));
    dart.setLibraryUri(BasicMessageChannel, "package:flutter_web/src/services/platform_channel.dart");
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(message_codec.MessageCodec$(T))
    }));
    return BasicMessageChannel;
  });
  platform_channel.BasicMessageChannel = platform_channel.BasicMessageChannel$();
  dart.addTypeTests(platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  let C477;
  let C476;
  const _handleAsMethodCall = dart.privateName(platform_channel, "_handleAsMethodCall");
  platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod() {
        if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_channel.dart", 296, 12, "method != null");
        let result = (yield platform_messages.BinaryMessages.send(this.name, this.codec.encodeMethodCall(new message_codec.MethodCall.new(method, arguments$0))));
        if (result == null) {
          dart.throw(new message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        let typedResult = T._check(this.codec.decodeEnvelope(result));
        return typedResult;
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return result[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      platform_messages.BinaryMessages.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    setMockMethodCallHandler(handler) {
      platform_messages.BinaryMessages.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(typed_data.ByteData, (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          }
        }
      }).bind(this));
    }
  };
  (platform_channel.MethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = C476 || CT.C476;
    this[name$] = name;
    this[codec$] = codec;
    ;
  }).prototype = platform_channel.MethodChannel.prototype;
  dart.addTypeTests(platform_channel.MethodChannel);
  const name$ = Symbol("MethodChannel.name");
  const codec$ = Symbol("MethodChannel.codec");
  dart.setMethodSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(platform_channel.MethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(T), [core.String], [dart.dynamic]]),
    invokeListMethod: dart.gFnType(T => [async.Future$(core.List$(T)), [core.String], [dart.dynamic]]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(core.Map$(K, V)), [core.String], [dart.dynamic]]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [message_codec.MethodCall])]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData, dart.fnType(async.Future, [message_codec.MethodCall])])
  }));
  dart.setLibraryUri(platform_channel.MethodChannel, "package:flutter_web/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec)
  }));
  const invokeMethod = Symbol("invokeMethod");
  platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends platform_channel.MethodChannel {
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod$() {
        try {
          let result = (yield this[invokeMethod](T, method, arguments$0));
          return result;
        } catch (e) {
          let ex = dart.getThrown(e);
          if (message_codec.MissingPluginException.is(ex)) {
            return null;
          } else
            throw e;
        }
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return result[$cast](K, V);
      }).bind(this));
    }
    [invokeMethod](T, method, arguments$0) {
      return super.invokeMethod(T, method, arguments$0);
    }
  };
  (platform_channel.OptionalMethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = C476 || CT.C476;
    platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
    ;
  }).prototype = platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(platform_channel.OptionalMethodChannel);
  dart.setLibraryUri(platform_channel.OptionalMethodChannel, "package:flutter_web/src/services/platform_channel.dart");
  platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    receiveBroadcastStream(arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      let methodChannel = new platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      controller = async.StreamController.broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(reply => async.async(typed_data.ByteData, (function*() {
            if (reply == null) {
              controller.close();
            } else {
              try {
                controller.add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (message_codec.PlatformException.is(e)) {
                  controller.addError(e);
                } else
                  throw e$;
              }
            }
            return FutureOrOfByteData()._check(async.Future.value(null));
          }).bind(this)), ByteDataToFutureOfByteData()));
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "listen", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull()), onCancel: dart.fn(() => async.async(core.Null, (function*() {
          platform_messages.BinaryMessages.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "cancel", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("while de-activating platform stream on channel " + dart.str(this.name))}));
          }
        }).bind(this)), VoidToFutureOfNull())});
      return controller.stream;
    }
  };
  (platform_channel.EventChannel.new = function(name, codec) {
    if (codec === void 0) codec = C476 || CT.C476;
    this[name$0] = name;
    this[codec$0] = codec;
    ;
  }).prototype = platform_channel.EventChannel.prototype;
  dart.addTypeTests(platform_channel.EventChannel);
  const name$0 = Symbol("EventChannel.name");
  const codec$0 = Symbol("EventChannel.codec");
  dart.setMethodSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setLibraryUri(platform_channel.EventChannel, "package:flutter_web/src/services/platform_channel.dart");
  dart.setFieldSignature(platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(message_codec.MethodCodec)
  }));
  platform_messages.BinaryMessages = class BinaryMessages extends core.Object {
    static _sendPlatformMessage(channel, message) {
      let completer = CompleterOfByteData().new();
      ui.window.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message response callback")}));
        }
      }, ByteDataToNull()));
      return completer.future;
    }
    static handlePlatformMessage(channel, data, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = platform_messages.BinaryMessages._handlers[$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: new assertions.ErrorDescription.new("during a platform message callback")}));
        } finally {
          callback(response);
        }
      });
    }
    static send(channel, message) {
      let handler = platform_messages.BinaryMessages._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return platform_messages.BinaryMessages._sendPlatformMessage(channel, message);
    }
    static setMessageHandler(channel, handler) {
      if (handler == null)
        platform_messages.BinaryMessages._handlers[$remove](channel);
      else
        platform_messages.BinaryMessages._handlers[$_set](channel, handler);
    }
    static setMockMessageHandler(channel, handler) {
      if (handler == null)
        platform_messages.BinaryMessages._mockHandlers[$remove](channel);
      else
        platform_messages.BinaryMessages._mockHandlers[$_set](channel, handler);
    }
  };
  (platform_messages.BinaryMessages.__ = function() {
    ;
  }).prototype = platform_messages.BinaryMessages.prototype;
  dart.addTypeTests(platform_messages.BinaryMessages);
  dart.setLibraryUri(platform_messages.BinaryMessages, "package:flutter_web/src/services/platform_messages.dart");
  dart.defineLazy(platform_messages.BinaryMessages, {
    /*platform_messages.BinaryMessages._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    },
    /*platform_messages.BinaryMessages._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    }
  });
  message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      typed_data.ByteData._check(message);
      return message;
    }
  };
  (message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(message_codecs.BinaryCodec);
  message_codecs.BinaryCodec[dart.implements] = () => [message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(typed_data.ByteData, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.BinaryCodec, "package:flutter_web/src/services/message_codecs.dart");
  message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List](message[$offsetInBytes], message[$lengthInBytes]));
    }
    encodeMessage(message) {
      core.String._check(message);
      if (message == null) return null;
      let encoded = convert.utf8.encoder.convert(message);
      return encoded[$buffer][$asByteData]();
    }
  };
  (message_codecs.StringCodec.new = function() {
    ;
  }).prototype = message_codecs.StringCodec.prototype;
  dart.addTypeTests(message_codecs.StringCodec);
  message_codecs.StringCodec[dart.implements] = () => [message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(core.String, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  dart.setLibraryUri(message_codecs.StringCodec, "package:flutter_web/src/services/message_codecs.dart");
  let C478;
  message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (C478 || CT.C478).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode((C478 || CT.C478).decodeMessage(message));
    }
  };
  (message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMessageCodec);
  message_codecs.JSONMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.JSONMessageCodec, "package:flutter_web/src/services/message_codecs.dart");
  let C479;
  message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      return (C479 || CT.C479).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments]));
    }
    decodeMethodCall(methodCall) {
      let decoded = (C479 || CT.C479).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = dart.dsend(decoded, '_get', ["method"]);
      let arguments$0 = dart.dsend(decoded, '_get', ["args"]);
      if (typeof method == 'string') return new message_codec.MethodCall.new(method, arguments$0);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (C479 || CT.C479).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (dart.equals(dart.dload(decoded, 'length'), 1)) return dart.dsend(decoded, '_get', [0]);
      if (dart.equals(dart.dload(decoded, 'length'), 3) && typeof dart.dsend(decoded, '_get', [0]) == 'string' && (dart.dsend(decoded, '_get', [1]) == null || typeof dart.dsend(decoded, '_get', [1]) == 'string')) dart.throw(new message_codec.PlatformException.new({code: core.String._check(dart.dsend(decoded, '_get', [0])), message: core.String._check(dart.dsend(decoded, '_get', [1])), details: dart.dsend(decoded, '_get', [2])}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return (C479 || CT.C479).encodeMessage([result]);
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/message_codecs.dart", 161, 12, "code != null");
      return (C479 || CT.C479).encodeMessage([code, message, details]);
    }
  };
  (message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(message_codecs.JSONMethodCodec);
  message_codecs.JSONMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String})
  }));
  dart.setLibraryUri(message_codecs.JSONMethodCodec, "package:flutter_web/src/services/message_codecs.dart");
  let C480;
  message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(C480 || CT.C480);
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(0);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? 1 : 2);
      } else if (typeof value == 'number') {
        buffer.putUint8(6);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(3);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(4);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(7);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(8);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(9);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(10);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(11);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(12);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(13);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicToNull()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!dart.test(buffer.hasRemaining)) dart.throw(C480 || CT.C480);
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      switch (type) {
        case 0:
        {
          return null;
        }
        case 1:
        {
          return true;
        }
        case 2:
        {
          return false;
        }
        case 3:
        {
          return buffer.getInt32();
        }
        case 4:
        {
          return buffer.getInt64();
        }
        case 6:
        {
          return buffer.getFloat64();
        }
        case 5:
        case 7:
        {
          let length = this.readSize(buffer);
          return convert.utf8.decoder.convert(buffer.getUint8List(length));
        }
        case 8:
        {
          let length = this.readSize(buffer);
          return buffer.getUint8List(length);
        }
        case 9:
        {
          let length = this.readSize(buffer);
          return buffer.getInt32List(length);
        }
        case 10:
        {
          let length = this.readSize(buffer);
          return buffer.getInt64List(length);
        }
        case 11:
        {
          let length = this.readSize(buffer);
          return buffer.getFloat64List(length);
        }
        case 12:
        {
          let length = this.readSize(buffer);
          let result = core.List.new(length);
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [i, this.readValue(buffer)]);
          return result;
        }
        case 13:
        {
          let length = this.readSize(buffer);
          let result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i = i + 1)
            dart.dsend(result, '_set', [this.readValue(buffer), this.readValue(buffer)]);
          return result;
        }
        default:
        {
          dart.throw(C480 || CT.C480);
        }
      }
    }
    writeSize(buffer, value) {
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/message_codecs.dart", 454, 12, "0 <= value && value <= 0xffffffff");
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMessageCodec);
  message_codecs.StandardMessageCodec[dart.implements] = () => [message_codec.MessageCodec];
  dart.setMethodSignature(message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    writeValue: dart.fnType(dart.void, [serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [serialization.ReadBuffer])
  }));
  dart.setLibraryUri(message_codecs.StandardMessageCodec, "package:flutter_web/src/services/message_codecs.dart");
  dart.defineLazy(message_codecs.StandardMessageCodec, {
    /*message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  });
  let C481;
  let C482;
  let C483;
  message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      let buffer = new serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new serialization.ReadBuffer.new(methodCall);
      let method = this.messageCodec.readValue(buffer);
      let arguments$0 = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new message_codec.MethodCall.new(method, arguments$0);
      else
        dart.throw(C481 || CT.C481);
    }
    encodeSuccessEnvelope(result) {
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(C482 || CT.C482);
      let buffer = new serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new message_codec.PlatformException.new({code: errorCode, message: core.String._check(errorMessage), details: errorDetails}));
      else
        dart.throw(C483 || CT.C483);
    }
  };
  (message_codecs.StandardMethodCodec.new = function(messageCodec) {
    if (messageCodec === void 0) messageCodec = C477 || CT.C477;
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(message_codecs.StandardMethodCodec);
  const messageCodec$ = Symbol("StandardMethodCodec.messageCodec");
  message_codecs.StandardMethodCodec[dart.implements] = () => [message_codec.MethodCodec];
  dart.setMethodSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(message_codec.MethodCall, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setLibraryUri(message_codecs.StandardMethodCodec, "package:flutter_web/src/services/message_codecs.dart");
  dart.setFieldSignature(message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(message_codecs.StandardMessageCodec)
  }));
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    dart.setLibraryUri(MessageCodec, "package:flutter_web/src/services/message_codec.dart");
    return MessageCodec;
  });
  message_codec.MessageCodec = message_codec.MessageCodec$();
  dart.addTypeTests(message_codec.MessageCodec, _is_MessageCodec_default);
  message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (message_codec.MethodCall.new = function(method, arguments$0) {
    if (arguments$0 === void 0) arguments$0 = null;
    this[method$] = method;
    this[arguments$] = arguments$0;
    if (!(method != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/message_codec.dart", 39, 60, "method != null");
    ;
  }).prototype = message_codec.MethodCall.prototype;
  dart.addTypeTests(message_codec.MethodCall);
  const method$ = Symbol("MethodCall.method");
  const arguments$ = Symbol("MethodCall.arguments");
  dart.setLibraryUri(message_codec.MethodCall, "package:flutter_web/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MethodCall, () => ({
    __proto__: dart.getFields(message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.MethodCall, ['toString']);
  message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (message_codec.MethodCodec.new = function() {
    ;
  }).prototype = message_codec.MethodCodec.prototype;
  dart.addTypeTests(message_codec.MethodCodec);
  dart.setLibraryUri(message_codec.MethodCodec, "package:flutter_web/src/services/message_codec.dart");
  message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ")";
    }
  };
  (message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    if (!(code != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/message_codec.dart", 108, 15, "code != null");
    ;
  }).prototype = message_codec.PlatformException.prototype;
  dart.addTypeTests(message_codec.PlatformException);
  const code$ = Symbol("PlatformException.code");
  const message$ = Symbol("PlatformException.message");
  const details$ = Symbol("PlatformException.details");
  message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.PlatformException, "package:flutter_web/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.PlatformException, () => ({
    __proto__: dart.getFields(message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(message_codec.PlatformException, ['toString']);
  message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (message_codec.MissingPluginException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
    ;
  }).prototype = message_codec.MissingPluginException.prototype;
  dart.addTypeTests(message_codec.MissingPluginException);
  const message$0 = Symbol("MissingPluginException.message");
  message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(message_codec.MissingPluginException, "package:flutter_web/src/services/message_codec.dart");
  dart.setFieldSignature(message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(message_codec.MissingPluginException, ['toString']);
  system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop() {
      return async.async(dart.void, function* pop() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemNavigator.pop");
      });
    }
  };
  (system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(system_navigator.SystemNavigator);
  dart.setLibraryUri(system_navigator.SystemNavigator, "package:flutter_web/src/services/system_navigator.dart");
  let C485;
  let C484;
  let C486;
  let C487;
  let C488;
  let C489;
  let C490;
  let C491;
  let C492;
  system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = system_channels.SystemChannels.prototype;
  dart.addTypeTests(system_channels.SystemChannels);
  dart.setLibraryUri(system_channels.SystemChannels, "package:flutter_web/src/services/system_channels.dart");
  dart.defineLazy(system_channels.SystemChannels, {
    /*system_channels.SystemChannels.navigation*/get navigation() {
      return C484 || CT.C484;
    },
    /*system_channels.SystemChannels.platform*/get platform() {
      return C486 || CT.C486;
    },
    /*system_channels.SystemChannels.textInput*/get textInput() {
      return C487 || CT.C487;
    },
    /*system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return C488 || CT.C488;
    },
    /*system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return C489 || CT.C489;
    },
    /*system_channels.SystemChannels.system*/get system() {
      return C490 || CT.C490;
    },
    /*system_channels.SystemChannels.accessibility*/get accessibility() {
      return C491 || CT.C491;
    },
    /*system_channels.SystemChannels.platform_views*/get platform_views() {
      return C492 || CT.C492;
    }
  });
  let C493;
  text_editing.TextRange = class TextRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get isValid() {
      return dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= 0;
    }
    get isCollapsed() {
      return this.start == this.end;
    }
    get isNormalized() {
      return dart.notNull(this.end) >= dart.notNull(this.start);
    }
    textBefore(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 58, 12, "isNormalized");
      return text[$substring](0, this.start);
    }
    textAfter(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 64, 12, "isNormalized");
      return text[$substring](this.end);
    }
    textInside(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 70, 12, "isNormalized");
      return text[$substring](this.start, this.end);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextRange.is(other)) return false;
      let typedOther = text_editing.TextRange._check(other);
      return typedOther.start == this.start && typedOther.end == this.end;
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.start), dart.hashCode(this.end));
    }
    toString() {
      return "TextRange(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
  };
  (text_editing.TextRange.new = function(opts) {
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[start$] = start;
    this[end$] = end;
    if (!(start != null && dart.notNull(start) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 23, 16, "start != null && start >= -1");
    if (!(end != null && dart.notNull(end) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 24, 16, "end != null && end >= -1");
    ;
  }).prototype = text_editing.TextRange.prototype;
  (text_editing.TextRange.collapsed = function(offset) {
    if (!(offset != null && dart.notNull(offset) >= -1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart", 30, 16, "offset != null && offset >= -1");
    this[start$] = offset;
    this[end$] = offset;
    ;
  }).prototype = text_editing.TextRange.prototype;
  dart.addTypeTests(text_editing.TextRange);
  const start$ = Symbol("TextRange.start");
  const end$ = Symbol("TextRange.end");
  dart.setMethodSignature(text_editing.TextRange, () => ({
    __proto__: dart.getMethods(text_editing.TextRange.__proto__),
    textBefore: dart.fnType(core.String, [core.String]),
    textAfter: dart.fnType(core.String, [core.String]),
    textInside: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(text_editing.TextRange, () => ({
    __proto__: dart.getGetters(text_editing.TextRange.__proto__),
    isValid: core.bool,
    isCollapsed: core.bool,
    isNormalized: core.bool
  }));
  dart.setLibraryUri(text_editing.TextRange, "package:flutter_web/src/services/text_editing.dart");
  dart.setFieldSignature(text_editing.TextRange, () => ({
    __proto__: dart.getFields(text_editing.TextRange.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(text_editing.TextRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(text_editing.TextRange, ['hashCode']);
  dart.defineLazy(text_editing.TextRange, {
    /*text_editing.TextRange.empty*/get empty() {
      return C493 || CT.C493;
    }
  });
  const _name = dart.privateName(ui, "_name");
  let C494;
  text_editing.TextSelection = class TextSelection extends text_editing.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_editing.TextSelection.is(other)) return false;
      let typedOther = text_editing.TextSelection._check(other);
      return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && dart.equals(typedOther.affinity, this.affinity) && dart.equals(typedOther.isDirectional, this.isDirectional);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let t9, t9$, t9$0, t9$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new text_editing.TextSelection.new({baseOffset: (t9 = baseOffset, t9 == null ? this.baseOffset : t9), extentOffset: (t9$ = extentOffset, t9$ == null ? this.extentOffset : t9$), affinity: (t9$0 = affinity, t9$0 == null ? this.affinity : t9$0), isDirectional: (t9$1 = isDirectional, t9$1 == null ? this.isDirectional : t9$1)});
    }
  };
  (text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C494 || CT.C494;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : C494 || CT.C494;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  (text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = text_editing.TextSelection.prototype;
  dart.addTypeTests(text_editing.TextSelection);
  const baseOffset$ = Symbol("TextSelection.baseOffset");
  const extentOffset$ = Symbol("TextSelection.extentOffset");
  const affinity$ = Symbol("TextSelection.affinity");
  const isDirectional$ = Symbol("TextSelection.isDirectional");
  dart.setMethodSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(text_editing.TextSelection, [], {affinity: ui.TextAffinity, baseOffset: core.int, extentOffset: core.int, isDirectional: core.bool})
  }));
  dart.setGetterSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(text_editing.TextSelection.__proto__),
    base: ui.TextPosition,
    extent: ui.TextPosition
  }));
  dart.setLibraryUri(text_editing.TextSelection, "package:flutter_web/src/services/text_editing.dart");
  dart.setFieldSignature(text_editing.TextSelection, () => ({
    __proto__: dart.getFields(text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_editing.TextSelection, ['hashCode']);
  const _name$ = dart.privateName(text_input, "_name");
  let C495;
  let C496;
  let C497;
  let C498;
  let C499;
  let C500;
  let C501;
  let C502;
  let C503;
  text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name$]() {
      return "TextInputType." + dart.str(text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name$], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + "name: " + dart.str(this[_name$]) + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (!text_input.TextInputType.is(other)) return false;
      let typedOther = text_input.TextInputType._check(other);
      return typedOther.index == this.index && dart.equals(typedOther.signed, this.signed) && dart.equals(typedOther.decimal, this.decimal);
    }
    get hashCode() {
      return ui.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = text_input.TextInputType.prototype;
  (text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = text_input.TextInputType.prototype;
  dart.addTypeTests(text_input.TextInputType);
  const index$ = Symbol("TextInputType.index");
  const signed$ = Symbol("TextInputType.signed");
  const decimal$ = Symbol("TextInputType.decimal");
  dart.setMethodSignature(text_input.TextInputType, () => ({
    __proto__: dart.getMethods(text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(text_input.TextInputType, () => ({
    __proto__: dart.getGetters(text_input.TextInputType.__proto__),
    [_name$]: core.String
  }));
  dart.setLibraryUri(text_input.TextInputType, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputType, () => ({
    __proto__: dart.getFields(text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(core.bool),
    decimal: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextInputType, ['hashCode']);
  dart.defineLazy(text_input.TextInputType, {
    /*text_input.TextInputType.text*/get text() {
      return C495 || CT.C495;
    },
    /*text_input.TextInputType.multiline*/get multiline() {
      return C496 || CT.C496;
    },
    /*text_input.TextInputType.number*/get number() {
      return C497 || CT.C497;
    },
    /*text_input.TextInputType.phone*/get phone() {
      return C498 || CT.C498;
    },
    /*text_input.TextInputType.datetime*/get datetime() {
      return C499 || CT.C499;
    },
    /*text_input.TextInputType.emailAddress*/get emailAddress() {
      return C500 || CT.C500;
    },
    /*text_input.TextInputType.url*/get url() {
      return C501 || CT.C501;
    },
    /*text_input.TextInputType.values*/get values() {
      return C502 || CT.C502;
    },
    /*text_input.TextInputType._names*/get _names() {
      return C503 || CT.C503;
    }
  });
  let C504;
  let C505;
  let C506;
  let C507;
  let C508;
  let C509;
  let C510;
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  let C516;
  let C517;
  text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.TextInputAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.TextInputAction.prototype;
  dart.addTypeTests(text_input.TextInputAction);
  dart.setLibraryUri(text_input.TextInputAction, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputAction, () => ({
    __proto__: dart.getFields(text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextInputAction, ['toString']);
  text_input.TextInputAction.none = C504 || CT.C504;
  text_input.TextInputAction.unspecified = C505 || CT.C505;
  text_input.TextInputAction.done = C506 || CT.C506;
  text_input.TextInputAction.go = C507 || CT.C507;
  text_input.TextInputAction.search = C508 || CT.C508;
  text_input.TextInputAction.send = C509 || CT.C509;
  text_input.TextInputAction.next = C510 || CT.C510;
  text_input.TextInputAction.previous = C511 || CT.C511;
  text_input.TextInputAction.continueAction = C512 || CT.C512;
  text_input.TextInputAction.join = C513 || CT.C513;
  text_input.TextInputAction.route = C514 || CT.C514;
  text_input.TextInputAction.emergencyCall = C515 || CT.C515;
  text_input.TextInputAction.newline = C516 || CT.C516;
  text_input.TextInputAction.values = C517 || CT.C517;
  let C518;
  let C519;
  let C520;
  let C521;
  let C522;
  text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.TextCapitalization.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.TextCapitalization.prototype;
  dart.addTypeTests(text_input.TextCapitalization);
  dart.setLibraryUri(text_input.TextCapitalization, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.TextCapitalization, ['toString']);
  text_input.TextCapitalization.words = C518 || CT.C518;
  text_input.TextCapitalization.sentences = C519 || CT.C519;
  text_input.TextCapitalization.characters = C520 || CT.C520;
  text_input.TextCapitalization.none = C521 || CT.C521;
  text_input.TextCapitalization.values = C522 || CT.C522;
  let C523;
  text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["inputType", this.inputType.toJson(), "obscureText", this.obscureText, "autocorrect", this.autocorrect, "actionLabel", this.actionLabel, "inputAction", dart.toString(this.inputAction), "textCapitalization", dart.toString(this.textCapitalization), "keyboardAppearance", dart.toString(this.keyboardAppearance)]);
    }
  };
  (text_input.TextInputConfiguration.new = function(opts) {
    let inputType = opts && 'inputType' in opts ? opts.inputType : C495 || CT.C495;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : C506 || CT.C506;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C523 || CT.C523;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C521 || CT.C521;
    this[inputType$] = inputType;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    if (!(inputType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 388, 16, "inputType != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 389, 16, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 390, 16, "autocorrect != null");
    if (!(keyboardAppearance != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 391, 16, "keyboardAppearance != null");
    if (!(inputAction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 392, 16, "inputAction != null");
    if (!(textCapitalization != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 393, 16, "textCapitalization != null");
    ;
  }).prototype = text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(text_input.TextInputConfiguration);
  const inputType$ = Symbol("TextInputConfiguration.inputType");
  const obscureText$ = Symbol("TextInputConfiguration.obscureText");
  const autocorrect$ = Symbol("TextInputConfiguration.autocorrect");
  const actionLabel$ = Symbol("TextInputConfiguration.actionLabel");
  const inputAction$ = Symbol("TextInputConfiguration.inputAction");
  const textCapitalization$ = Symbol("TextInputConfiguration.textCapitalization");
  const keyboardAppearance$ = Symbol("TextInputConfiguration.keyboardAppearance");
  dart.setMethodSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(text_input.TextInputConfiguration, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(text_input.TextInputType),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(core.String),
    inputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui.Brightness)
  }));
  let C524;
  let C525;
  let C526;
  let C527;
  text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (text_input.FloatingCursorDragState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(text_input.FloatingCursorDragState);
  dart.setLibraryUri(text_input.FloatingCursorDragState, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(text_input.FloatingCursorDragState, ['toString']);
  text_input.FloatingCursorDragState.Start = C524 || CT.C524;
  text_input.FloatingCursorDragState.Update = C525 || CT.C525;
  text_input.FloatingCursorDragState.End = C526 || CT.C526;
  text_input.FloatingCursorDragState.values = C527 || CT.C527;
  text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 479, 16, "state != null");
    if (!(dart.equals(state, text_input.FloatingCursorDragState.Update) ? offset != null : true)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 480, 16, "state == FloatingCursorDragState.Update ? offset != null : true");
    ;
  }).prototype = text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(text_input.RawFloatingCursorPoint);
  const offset$ = Symbol("RawFloatingCursorPoint.offset");
  const state$ = Symbol("RawFloatingCursorPoint.state");
  dart.setLibraryUri(text_input.RawFloatingCursorPoint, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(ui.Offset),
    state: dart.finalFieldType(text_input.FloatingCursorDragState)
  }));
  let C528;
  let C529;
  text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      return new text_input.TextEditingValue.new({text: core.String._check(encoded[$_get]("text")), selection: new text_editing.TextSelection.new({baseOffset: core.int._check((t9 = encoded[$_get]("selectionBase"), t9 == null ? -1 : t9)), extentOffset: core.int._check((t9$ = encoded[$_get]("selectionExtent"), t9$ == null ? -1 : t9$)), affinity: (t9$0 = text_input._toTextAffinity(core.String._check(encoded[$_get]("selectionAffinity"))), t9$0 == null ? ui.TextAffinity.downstream : t9$0), isDirectional: core.bool._check((t9$1 = encoded[$_get]("selectionIsDirectional"), t9$1 == null ? false : t9$1))}), composing: new text_editing.TextRange.new({start: core.int._check((t9$2 = encoded[$_get]("composingBase"), t9$2 == null ? -1 : t9$2)), end: core.int._check((t9$3 = encoded[$_get]("composingExtent"), t9$3 == null ? -1 : t9$3))})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    copyWith(opts) {
      let t9, t9$, t9$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new text_input.TextEditingValue.new({text: (t9 = text, t9 == null ? this.text : t9), selection: (t9$ = selection, t9$ == null ? this.selection : t9$), composing: (t9$0 = composing, t9$0 == null ? this.composing : t9$0)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(text: ┤" + dart.str(this.text) + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!text_input.TextEditingValue.is(other)) return false;
      let typedOther = text_input.TextEditingValue._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.selection, this.selection) && dart.equals(typedOther.composing, this.composing);
    }
    get hashCode() {
      return ui.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : C528 || CT.C528;
    let composing = opts && 'composing' in opts ? opts.composing : C493 || CT.C493;
    this[text$] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 502, 16, "text != null");
    if (!(selection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 503, 16, "selection != null");
    if (!(composing != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 504, 16, "composing != null");
    ;
  }).prototype = text_input.TextEditingValue.prototype;
  dart.addTypeTests(text_input.TextEditingValue);
  const text$ = Symbol("TextEditingValue.text");
  const selection$ = Symbol("TextEditingValue.selection");
  const composing$ = Symbol("TextEditingValue.composing");
  dart.setMethodSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(text_input.TextEditingValue, [], {composing: text_editing.TextRange, selection: text_editing.TextSelection, text: core.String})
  }));
  dart.setLibraryUri(text_input.TextEditingValue, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(text_editing.TextSelection),
    composing: dart.finalFieldType(text_editing.TextRange)
  }));
  dart.defineExtensionMethods(text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(text_input.TextEditingValue, {
    /*text_input.TextEditingValue.empty*/get empty() {
      return C529 || CT.C529;
    }
  });
  text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {};
  (text_input.TextSelectionDelegate.new = function() {
    ;
  }).prototype = text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(text_input.TextSelectionDelegate);
  dart.setLibraryUri(text_input.TextSelectionDelegate, "package:flutter_web/src/services/text_input.dart");
  text_input.TextInputClient = class TextInputClient extends core.Object {};
  (text_input.TextInputClient.new = function() {
    ;
  }).prototype = text_input.TextInputClient.prototype;
  dart.addTypeTests(text_input.TextInputClient);
  dart.setLibraryUri(text_input.TextInputClient, "package:flutter_web/src/services/text_input.dart");
  const _client$ = dart.privateName(text_input, "_client");
  const _id = dart.privateName(text_input, "_id");
  const _currentConnection = dart.privateName(text_input, "_currentConnection");
  const _scheduleHide = dart.privateName(text_input, "_scheduleHide");
  text_input.TextInputConnection = class TextInputConnection extends core.Object {
    get attached() {
      return dart.equals(text_input._clientHandler[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 634, 12, "attached");
      system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.show");
    }
    setEditingState(value) {
      if (!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 640, 12, "attached");
      system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setEditingState", value.toJSON());
    }
    close() {
      let t9;
      if (dart.test(this.attached)) {
        system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.clearClient");
        t9 = text_input._clientHandler;
        t9[_currentConnection] = null;
        t9[_scheduleHide]();
        t9;
      }
      if (!!dart.test(this.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 658, 12, "!attached");
    }
  };
  (text_input.TextInputConnection.__ = function(_client) {
    let t9;
    this[_client$] = _client;
    if (!(_client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 621, 16, "_client != null");
    this[_id] = (t9 = text_input.TextInputConnection._nextId, text_input.TextInputConnection._nextId = dart.notNull(t9) + 1, t9);
    ;
  }).prototype = text_input.TextInputConnection.prototype;
  dart.addTypeTests(text_input.TextInputConnection);
  dart.setMethodSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    setEditingState: dart.fnType(dart.void, [text_input.TextEditingValue]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setLibraryUri(text_input.TextInputConnection, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(text_input.TextInputConnection.__proto__),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(text_input.TextInputClient)
  }));
  dart.defineLazy(text_input.TextInputConnection, {
    /*text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _hidePending = dart.privateName(text_input, "_hidePending");
  const _handleTextInputInvocation = dart.privateName(text_input, "_handleTextInputInvocation");
  text_input._TextInputClientHandler = class _TextInputClientHandler extends core.Object {
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        let args = core.List._check(methodCall.arguments);
        let client = core.int._check(args[$_get](0));
        if (client != this[_currentConnection][_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            this[_currentConnection][_client$].updateEditingValue(text_input.TextEditingValue.fromJSON(MapOfString$dynamic()._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            this[_currentConnection][_client$].performAction(text_input._toTextInputAction(core.String._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            this[_currentConnection][_client$].updateFloatingCursor(text_input._toTextPoint(text_input._toTextCursorAction(core.String._check(args[$_get](1))), MapOfString$dynamic()._check(args[$_get](2))));
            break;
          }
          default:
          {
            dart.throw(new message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.hide");
      }, VoidToNull()));
    }
  };
  (text_input._TextInputClientHandler.new = function() {
    this[_currentConnection] = null;
    this[_hidePending] = false;
    system_channels.SystemChannels.textInput.setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = text_input._TextInputClientHandler.prototype;
  dart.addTypeTests(text_input._TextInputClientHandler);
  dart.setMethodSignature(text_input._TextInputClientHandler, () => ({
    __proto__: dart.getMethods(text_input._TextInputClientHandler.__proto__),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(text_input._TextInputClientHandler, "package:flutter_web/src/services/text_input.dart");
  dart.setFieldSignature(text_input._TextInputClientHandler, () => ({
    __proto__: dart.getFields(text_input._TextInputClientHandler.__proto__),
    [_currentConnection]: dart.fieldType(text_input.TextInputConnection),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  let C530;
  let C531;
  text_input.TextInput = class TextInput extends core.Object {
    static attach(client, configuration) {
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 813, 12, "client != null");
      if (!(configuration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 814, 12, "configuration != null");
      if (!dart.test(text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 815, 12, "_debugEnsureInputActionWorksOnPlatform(configuration.inputAction)");
      let connection = new text_input.TextInputConnection.__(client);
      text_input._clientHandler[_currentConnection] = connection;
      system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      return connection;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(io.Platform.isIOS)) {
          if (!dart.test(text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.", "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 830, 11, "_iOSSupportedInputActions.contains(inputAction)");
        } else if (dart.test(io.Platform.isAndroid)) {
          if (!dart.test(text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.", "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 835, 11, "_androidSupportedInputActions.contains(inputAction)");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 827, 12, "() {\r\n      if (Platform.isIOS) {\r\n        assert(\r\n          _iOSSupportedInputActions.contains(inputAction),\r\n          'The requested TextInputAction \"$inputAction\" is not supported on iOS.',\r\n        );\r\n      } else if (Platform.isAndroid) {\r\n        assert(\r\n          _androidSupportedInputActions.contains(inputAction),\r\n          'The requested TextInputAction \"$inputAction\" is not supported on Android.',\r\n        );\r\n      }\r\n      return true;\r\n    }()");
      return true;
    }
  };
  (text_input.TextInput.__ = function() {
    ;
  }).prototype = text_input.TextInput.prototype;
  dart.addTypeTests(text_input.TextInput);
  dart.setLibraryUri(text_input.TextInput, "package:flutter_web/src/services/text_input.dart");
  dart.defineLazy(text_input.TextInput, {
    /*text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return C530 || CT.C530;
    },
    /*text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return C531 || CT.C531;
    }
  });
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C532;
  text_input._toTextAffinity = function _toTextAffinity(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui.TextAffinity.upstream;
      }
    }
    return null;
  };
  text_input._toTextInputAction = function _toTextInputAction(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return text_input.TextInputAction.next;
      }
      case "TextInputAction.previuos":
      {
        return text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return text_input.TextInputAction.newline;
      }
    }
    dart.throw(assertions.FlutterError.new("Unknown text input action: " + dart.str(action)));
  };
  text_input._toTextCursorAction = function _toTextCursorAction(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(assertions.FlutterError.new("Unknown text cursor action: " + dart.str(state)));
  };
  text_input._toTextPoint = function _toTextPoint(state, encoded) {
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.", "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 708, 10, "state != null");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.", "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 709, 10, "encoded['X'] != null");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.", "org-dartlang-app:///packages/flutter_web/src/services/text_input.dart", 711, 10, "encoded['Y'] != null");
    let offset = dart.equals(state, text_input.FloatingCursorDragState.Update) ? new ui.Offset.new(core.double._check(encoded[$_get]("X")), core.double._check(encoded[$_get]("Y"))) : C532 || CT.C532;
    return new text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  dart.defineLazy(text_input, {
    /*text_input._clientHandler*/get _clientHandler() {
      return new text_input._TextInputClientHandler.new();
    }
  });
  const _name$0 = dart.privateName(system_chrome, "_name");
  let C533;
  let C534;
  let C535;
  let C536;
  let C537;
  system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (system_chrome.DeviceOrientation.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(system_chrome.DeviceOrientation);
  dart.setLibraryUri(system_chrome.DeviceOrientation, "package:flutter_web/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.DeviceOrientation, ['toString']);
  system_chrome.DeviceOrientation.portraitUp = C533 || CT.C533;
  system_chrome.DeviceOrientation.landscapeLeft = C534 || CT.C534;
  system_chrome.DeviceOrientation.portraitDown = C535 || CT.C535;
  system_chrome.DeviceOrientation.landscapeRight = C536 || CT.C536;
  system_chrome.DeviceOrientation.values = C537 || CT.C537;
  system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(system_chrome.ApplicationSwitcherDescription);
  const label$ = Symbol("ApplicationSwitcherDescription.label");
  const primaryColor$ = Symbol("ApplicationSwitcherDescription.primaryColor");
  dart.setLibraryUri(system_chrome.ApplicationSwitcherDescription, "package:flutter_web/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(core.String),
    primaryColor: dart.finalFieldType(core.int)
  }));
  let C538;
  let C539;
  let C540;
  system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (system_chrome.SystemUiOverlay.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlay);
  dart.setLibraryUri(system_chrome.SystemUiOverlay, "package:flutter_web/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlay, ['toString']);
  system_chrome.SystemUiOverlay.top = C538 || CT.C538;
  system_chrome.SystemUiOverlay.bottom = C539 || CT.C539;
  system_chrome.SystemUiOverlay.values = C540 || CT.C540;
  const _toMap = dart.privateName(system_chrome, "_toMap");
  let C542;
  const _value = dart.privateName(ui, "_value");
  let C543;
  let C541;
  let C544;
  system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t9 = this.systemNavigationBarColor, t9 == null ? null : t9.value), "systemNavigationBarDividerColor", (t9$ = this.systemNavigationBarDividerColor, t9$ == null ? null : t9$.value), "statusBarColor", (t9$0 = this.statusBarColor, t9$0 == null ? null : t9$0.value), "statusBarBrightness", (t9$1 = this.statusBarBrightness, t9$1 == null ? null : dart.toString(t9$1)), "statusBarIconBrightness", (t9$2 = this.statusBarIconBrightness, t9$2 == null ? null : dart.toString(t9$2)), "systemNavigationBarIconBrightness", (t9$3 = this.systemNavigationBarIconBrightness, t9$3 == null ? null : dart.toString(t9$3))]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t9 = systemNavigationBarColor, t9 == null ? this.systemNavigationBarColor : t9), systemNavigationBarDividerColor: (t9$ = systemNavigationBarDividerColor, t9$ == null ? this.systemNavigationBarDividerColor : t9$), statusBarColor: (t9$0 = statusBarColor, t9$0 == null ? this.statusBarColor : t9$0), statusBarIconBrightness: (t9$1 = statusBarIconBrightness, t9$1 == null ? this.statusBarIconBrightness : t9$1), statusBarBrightness: (t9$2 = statusBarBrightness, t9$2 == null ? this.statusBarBrightness : t9$2), systemNavigationBarIconBrightness: (t9$3 = systemNavigationBarIconBrightness, t9$3 == null ? this.systemNavigationBarIconBrightness : t9$3)});
    }
    get hashCode() {
      return ui.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = system_chrome.SystemUiOverlayStyle._check(other);
      return dart.equals(typedOther.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(typedOther.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(typedOther.statusBarColor, this.statusBarColor) && dart.equals(typedOther.statusBarIconBrightness, this.statusBarIconBrightness) && dart.equals(typedOther.statusBarBrightness, this.statusBarBrightness) && dart.equals(typedOther.systemNavigationBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
  };
  (system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    ;
  }).prototype = system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(system_chrome.SystemUiOverlayStyle);
  const systemNavigationBarColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarColor");
  const systemNavigationBarDividerColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarDividerColor");
  const systemNavigationBarIconBrightness$ = Symbol("SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  const statusBarColor$ = Symbol("SystemUiOverlayStyle.statusBarColor");
  const statusBarBrightness$ = Symbol("SystemUiOverlayStyle.statusBarBrightness");
  const statusBarIconBrightness$ = Symbol("SystemUiOverlayStyle.statusBarIconBrightness");
  dart.setMethodSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: ui.Brightness, statusBarColor: ui.Color, statusBarIconBrightness: ui.Brightness, systemNavigationBarColor: ui.Color, systemNavigationBarDividerColor: ui.Color, systemNavigationBarIconBrightness: ui.Brightness})
  }));
  dart.setLibraryUri(system_chrome.SystemUiOverlayStyle, "package:flutter_web/src/services/system_chrome.dart");
  dart.setFieldSignature(system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(ui.Color),
    systemNavigationBarDividerColor: dart.finalFieldType(ui.Color),
    systemNavigationBarIconBrightness: dart.finalFieldType(ui.Brightness),
    statusBarColor: dart.finalFieldType(ui.Color),
    statusBarBrightness: dart.finalFieldType(ui.Brightness),
    statusBarIconBrightness: dart.finalFieldType(ui.Brightness)
  }));
  dart.defineExtensionMethods(system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(system_chrome.SystemUiOverlayStyle, {
    /*system_chrome.SystemUiOverlayStyle.light*/get light() {
      return C541 || CT.C541;
    },
    /*system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return C544 || CT.C544;
    }
  });
  system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/system_chrome.dart", 385, 12, "style != null");
      if (system_chrome.SystemChrome._pendingStyle != null) {
        system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/system_chrome.dart", 398, 14, "_pendingStyle != null");
        if (!dart.equals(system_chrome.SystemChrome._pendingStyle, system_chrome.SystemChrome._latestStyle)) {
          system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", system_chrome.SystemChrome._pendingStyle[_toMap]());
          system_chrome.SystemChrome._latestStyle = system_chrome.SystemChrome._pendingStyle;
        }
        system_chrome.SystemChrome._pendingStyle = null;
      }, VoidToNull()));
    }
    static get latestStyle() {
      return system_chrome.SystemChrome._latestStyle;
    }
  };
  (system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = system_chrome.SystemChrome.prototype;
  dart.addTypeTests(system_chrome.SystemChrome);
  dart.setLibraryUri(system_chrome.SystemChrome, "package:flutter_web/src/services/system_chrome.dart");
  dart.defineLazy(system_chrome.SystemChrome, {
    /*system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  });
  system_chrome._stringify = function _stringify(list) {
    let result = JSArrayOfString().of([]);
    for (let item of list)
      result[$add](dart.toString(item));
    return result;
  };
  const _name$1 = dart.privateName(system_sound, "_name");
  let C545;
  let C546;
  system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (system_sound.SystemSoundType.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = system_sound.SystemSoundType.prototype;
  dart.addTypeTests(system_sound.SystemSoundType);
  dart.setLibraryUri(system_sound.SystemSoundType, "package:flutter_web/src/services/system_sound.dart");
  dart.setFieldSignature(system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(system_sound.SystemSoundType, ['toString']);
  system_sound.SystemSoundType.click = C545 || CT.C545;
  system_sound.SystemSoundType.values = C546 || CT.C546;
  system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      return async.async(dart.void, function* play() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (system_sound.SystemSound.__ = function() {
    ;
  }).prototype = system_sound.SystemSound.prototype;
  dart.addTypeTests(system_sound.SystemSound);
  dart.setLibraryUri(system_sound.SystemSound, "package:flutter_web/src/services/system_sound.dart");
  const _name$2 = dart.privateName(raw_keyboard, "_name");
  let C547;
  let C548;
  let C549;
  let C550;
  let C551;
  raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (raw_keyboard.KeyboardSide.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(raw_keyboard.KeyboardSide);
  dart.setLibraryUri(raw_keyboard.KeyboardSide, "package:flutter_web/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.KeyboardSide, ['toString']);
  raw_keyboard.KeyboardSide.any = C547 || CT.C547;
  raw_keyboard.KeyboardSide.left = C548 || CT.C548;
  raw_keyboard.KeyboardSide.right = C549 || CT.C549;
  raw_keyboard.KeyboardSide.all = C550 || CT.C550;
  raw_keyboard.KeyboardSide.values = C551 || CT.C551;
  let C552;
  let C553;
  let C554;
  let C555;
  let C556;
  let C557;
  let C558;
  let C559;
  let C560;
  let C561;
  raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (raw_keyboard.ModifierKey.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(raw_keyboard.ModifierKey);
  dart.setLibraryUri(raw_keyboard.ModifierKey, "package:flutter_web/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(raw_keyboard.ModifierKey, ['toString']);
  raw_keyboard.ModifierKey.controlModifier = C552 || CT.C552;
  raw_keyboard.ModifierKey.shiftModifier = C553 || CT.C553;
  raw_keyboard.ModifierKey.altModifier = C554 || CT.C554;
  raw_keyboard.ModifierKey.metaModifier = C555 || CT.C555;
  raw_keyboard.ModifierKey.capsLockModifier = C556 || CT.C556;
  raw_keyboard.ModifierKey.numLockModifier = C557 || CT.C557;
  raw_keyboard.ModifierKey.scrollLockModifier = C558 || CT.C558;
  raw_keyboard.ModifierKey.functionModifier = C559 || CT.C559;
  raw_keyboard.ModifierKey.symbolModifier = C560 || CT.C560;
  raw_keyboard.ModifierKey.values = C561 || CT.C561;
  raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.controlModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.shiftModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.altModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(raw_keyboard.ModifierKey.metaModifier, {side: raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          result[$_set](key, this.getModifierSide(key));
        }
      }
      return result;
    }
  };
  (raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(raw_keyboard.ModifierKey, raw_keyboard.KeyboardSide)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEventData, "package:flutter_web/src/services/raw_keyboard.dart");
  raw_keyboard.RawKeyEvent = class RawKeyEvent extends core.Object {
    get character() {
      return this[character$];
    }
    set character(value) {
      super.character = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3, t9$4, t9$5, t9$6, t9$7, t9$8, t9$9, t9$10, t9$11, t9$12, t9$13, t9$14, t9$15;
      let data = null;
      let keymap = core.String._check(message[$_get]("keymap"));
      switch (keymap) {
        case "fuchsia":
        {
          data = new raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new({hidUsage: core.int._check((t9 = message[$_get]("hidUsage"), t9 == null ? 0 : t9)), codePoint: core.int._check((t9$ = message[$_get]("codePoint"), t9$ == null ? 0 : t9$)), modifiers: core.int._check((t9$0 = message[$_get]("modifiers"), t9$0 == null ? 0 : t9$0))});
          break;
        }
        case "android":
        {
          data = new raw_keyboard_android.RawKeyEventDataAndroid.new({flags: core.int._check((t9$1 = message[$_get]("flags"), t9$1 == null ? 0 : t9$1)), codePoint: core.int._check((t9$2 = message[$_get]("codePoint"), t9$2 == null ? 0 : t9$2)), keyCode: core.int._check((t9$3 = message[$_get]("keyCode"), t9$3 == null ? 0 : t9$3)), plainCodePoint: core.int._check((t9$4 = message[$_get]("plainCodePoint"), t9$4 == null ? 0 : t9$4)), scanCode: core.int._check((t9$5 = message[$_get]("scanCode"), t9$5 == null ? 0 : t9$5)), metaState: core.int._check((t9$6 = message[$_get]("metaState"), t9$6 == null ? 0 : t9$6))});
          break;
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      if (!true) {
        switch (keymap) {
          case "macos":
          {
            data = new raw_keyboard_macos.RawKeyEventDataMacOs.new({characters: core.String._check((t9$7 = message[$_get]("characters"), t9$7 == null ? "" : t9$7)), charactersIgnoringModifiers: core.String._check((t9$8 = message[$_get]("charactersIgnoringModifiers"), t9$8 == null ? "" : t9$8)), keyCode: core.int._check((t9$9 = message[$_get]("keyCode"), t9$9 == null ? 0 : t9$9)), modifiers: core.int._check((t9$10 = message[$_get]("modifiers"), t9$10 == null ? 0 : t9$10))});
            break;
          }
          case "linux":
          {
            data = new raw_keyboard_linux.RawKeyEventDataLinux.new({keyHelper: raw_keyboard_linux.KeyHelper.new(core.String._check((t9$11 = message[$_get]("toolkit"), t9$11 == null ? "" : t9$11))), codePoint: core.int._check((t9$12 = message[$_get]("codePoint"), t9$12 == null ? 0 : t9$12)), keyCode: core.int._check((t9$13 = message[$_get]("keyCode"), t9$13 == null ? 0 : t9$13)), scanCode: core.int._check((t9$14 = message[$_get]("scanCode"), t9$14 == null ? 0 : t9$14)), modifiers: core.int._check((t9$15 = message[$_get]("modifiers"), t9$15 == null ? 0 : t9$15))});
            break;
          }
          default:
          {
            dart.throw(assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
          }
        }
      }
      let type = core.String._check(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new raw_keyboard.RawKeyDownEvent.new({data: data, character: core.String._check(message[$_get]("character"))});
        }
        case "keyup":
        {
          return new raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
    isKeyPressed(key) {
      return raw_keyboard.RawKeyboard.instance.keysPressed.contains(key);
    }
    get isControlPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.controlRight));
    }
    get isShiftPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.shiftRight));
    }
    get isAltPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.altRight));
    }
    get isMetaPressed() {
      return dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaLeft)) || dart.test(this.isKeyPressed(keyboard_key.LogicalKeyboardKey.metaRight));
    }
    get physicalKey() {
      return this.data.physicalKey;
    }
    get logicalKey() {
      return this.data.logicalKey;
    }
  };
  (raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    this[data$] = data;
    this[character$] = character;
    ;
  }).prototype = raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyEvent);
  const character$ = Symbol("RawKeyEvent.character");
  const data$ = Symbol("RawKeyEvent.data");
  dart.setMethodSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyEvent.__proto__),
    isKeyPressed: dart.fnType(core.bool, [keyboard_key.LogicalKeyboardKey])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyEvent.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyEvent, "package:flutter_web/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyEvent.__proto__),
    character: dart.finalFieldType(core.String),
    data: dart.finalFieldType(raw_keyboard.RawKeyEventData)
  }));
  raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyDownEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyDownEvent, "package:flutter_web/src/services/raw_keyboard.dart");
  raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends raw_keyboard.RawKeyEvent {};
  (raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    let character = opts && 'character' in opts ? opts.character : null;
    raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data, character: character});
    ;
  }).prototype = raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyUpEvent);
  dart.setLibraryUri(raw_keyboard.RawKeyUpEvent, "package:flutter_web/src/services/raw_keyboard.dart");
  const _listeners = dart.privateName(raw_keyboard, "_listeners");
  const _keysPressed = dart.privateName(raw_keyboard, "_keysPressed");
  const _handleKeyEvent = dart.privateName(raw_keyboard, "_handleKeyEvent");
  raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        let event = raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic()._check(message));
        if (event == null) {
          return;
        }
        if (raw_keyboard.RawKeyDownEvent.is(event)) {
          this[_keysPressed].add(event.logicalKey);
        }
        if (raw_keyboard.RawKeyUpEvent.is(event)) {
          this[_keysPressed].remove(event.logicalKey);
        }
        if (dart.test(this[_listeners][$isEmpty])) {
          return;
        }
        for (let listener of ListOfRawKeyEventTovoid().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
      }).bind(this));
    }
    get keysPressed() {
      return this[_keysPressed].toSet();
    }
  };
  (raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfRawKeyEventTovoid().of([]);
    this[_keysPressed] = LinkedHashSetOfLogicalKeyboardKey().new();
    system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(raw_keyboard.RawKeyboard);
  dart.setMethodSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setGetterSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getGetters(raw_keyboard.RawKeyboard.__proto__),
    keysPressed: core.Set$(keyboard_key.LogicalKeyboardKey)
  }));
  dart.setLibraryUri(raw_keyboard.RawKeyboard, "package:flutter_web/src/services/raw_keyboard.dart");
  dart.setFieldSignature(raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]))),
    [_keysPressed]: dart.finalFieldType(core.Set$(keyboard_key.LogicalKeyboardKey))
  }));
  dart.defineLazy(raw_keyboard.RawKeyboard, {
    /*raw_keyboard.RawKeyboard.instance*/get instance() {
      return new raw_keyboard.RawKeyboard.__();
    }
  });
  raw_keyboard_linux.RawKeyEventDataLinux = class RawKeyEventDataLinux extends raw_keyboard.RawKeyEventData {
    get keyHelper() {
      return this[keyHelper$];
    }
    set keyHelper(value) {
      super.keyHelper = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.codePoint === 0 ? null : core.String.fromCharCode(this.codePoint);
    }
    get physicalKey() {
      let t9;
      t9 = keyboard_maps.kLinuxToPhysicalKey[$_get](this.scanCode);
      return t9 == null ? keyboard_key.PhysicalKeyboardKey.none : t9;
    }
    get logicalKey() {
      let t9;
      let numPadKey = this.keyHelper.numpadKey(this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let keyId = (0 | (dart.notNull(this.codePoint) & 4294967295.0) >>> 0) >>> 0;
        t9 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t9 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t9;
      }
      let newKey = this.keyHelper.logicalKey(this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((25769803776.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C547 || CT.C547;
      return this.keyHelper.isModifierPressed(key, this.modifiers, {side: side});
    }
    getModifierSide(key) {
      return this.keyHelper.getModifierSide(key);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + "," + " codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_linux.RawKeyEventDataLinux.new = function(opts) {
    let keyHelper = opts && 'keyHelper' in opts ? opts.keyHelper : null;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[keyHelper$] = keyHelper;
    this[scanCode$] = scanCode;
    this[codePoint$] = codePoint;
    this[keyCode$] = keyCode;
    this[modifiers$] = modifiers;
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 31, 16, "scanCode != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 32, 16, "codePoint != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 33, 16, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 34, 16, "modifiers != null");
    if (!(keyHelper != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 35, 16, "keyHelper != null");
    raw_keyboard_linux.RawKeyEventDataLinux.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_linux.RawKeyEventDataLinux.prototype;
  dart.addTypeTests(raw_keyboard_linux.RawKeyEventDataLinux);
  const keyHelper$ = Symbol("RawKeyEventDataLinux.keyHelper");
  const scanCode$ = Symbol("RawKeyEventDataLinux.scanCode");
  const codePoint$ = Symbol("RawKeyEventDataLinux.codePoint");
  const keyCode$ = Symbol("RawKeyEventDataLinux.keyCode");
  const modifiers$ = Symbol("RawKeyEventDataLinux.modifiers");
  dart.setMethodSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getGetters(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_linux.RawKeyEventDataLinux, "package:flutter_web/src/services/raw_keyboard_linux.dart");
  dart.setFieldSignature(raw_keyboard_linux.RawKeyEventDataLinux, () => ({
    __proto__: dart.getFields(raw_keyboard_linux.RawKeyEventDataLinux.__proto__),
    keyHelper: dart.finalFieldType(raw_keyboard_linux.KeyHelper),
    scanCode: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_linux.RawKeyEventDataLinux, ['toString']);
  raw_keyboard_linux.KeyHelper = class KeyHelper extends core.Object {
    static new(toolkit) {
      if (toolkit === "glfw") {
        return new raw_keyboard_linux.GLFWKeyHelper.new();
      } else {
        dart.throw(assertions.FlutterError.new("Window toolkit not recognized: " + dart.str(toolkit)));
      }
    }
  };
  (raw_keyboard_linux.KeyHelper[dart.mixinNew] = function() {
  }).prototype = raw_keyboard_linux.KeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.KeyHelper);
  dart.setLibraryUri(raw_keyboard_linux.KeyHelper, "package:flutter_web/src/services/raw_keyboard_linux.dart");
  const Object_KeyHelper$ = class Object_KeyHelper extends core.Object {};
  (Object_KeyHelper$.new = function() {
  }).prototype = Object_KeyHelper$.prototype;
  dart.applyMixin(Object_KeyHelper$, raw_keyboard_linux.KeyHelper);
  raw_keyboard_linux.GLFWKeyHelper = class GLFWKeyHelper extends Object_KeyHelper$ {
    isModifierPressed(key, modifiers, opts) {
      let side = opts && 'side' in opts ? opts.side : C547 || CT.C547;
      switch (key) {
        case C552 || CT.C552:
        {
          return (dart.notNull(modifiers) & 2) !== 0;
        }
        case C553 || CT.C553:
        {
          return (dart.notNull(modifiers) & 1) !== 0;
        }
        case C554 || CT.C554:
        {
          return (dart.notNull(modifiers) & 4) !== 0;
        }
        case C555 || CT.C555:
        {
          return (dart.notNull(modifiers) & 8) !== 0;
        }
        case C556 || CT.C556:
        {
          return (dart.notNull(modifiers) & 16) !== 0;
        }
        case C557 || CT.C557:
        {
          return (dart.notNull(modifiers) & 32) !== 0;
        }
        case C559 || CT.C559:
        case C560 || CT.C560:
        case C558 || CT.C558:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      switch (key) {
        case C552 || CT.C552:
        case C553 || CT.C553:
        case C554 || CT.C554:
        case C555 || CT.C555:
        {
          return raw_keyboard.KeyboardSide.any;
        }
        case C556 || CT.C556:
        case C557 || CT.C557:
        case C559 || CT.C559:
        case C560 || CT.C560:
        case C558 || CT.C558:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_linux.dart", 250, 12, "false");
      return null;
    }
    numpadKey(keyCode) {
      return keyboard_maps.kGlfwNumpadMap[$_get](keyCode);
    }
    logicalKey(keyCode) {
      return keyboard_maps.kGlfwToLogicalKey[$_get](keyCode);
    }
  };
  (raw_keyboard_linux.GLFWKeyHelper.new = function() {
    ;
  }).prototype = raw_keyboard_linux.GLFWKeyHelper.prototype;
  dart.addTypeTests(raw_keyboard_linux.GLFWKeyHelper);
  dart.setMethodSignature(raw_keyboard_linux.GLFWKeyHelper, () => ({
    __proto__: dart.getMethods(raw_keyboard_linux.GLFWKeyHelper.__proto__),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey, core.int], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey]),
    numpadKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int]),
    logicalKey: dart.fnType(keyboard_key.LogicalKeyboardKey, [core.int])
  }));
  dart.setLibraryUri(raw_keyboard_linux.GLFWKeyHelper, "package:flutter_web/src/services/raw_keyboard_linux.dart");
  dart.defineLazy(raw_keyboard_linux.GLFWKeyHelper, {
    /*raw_keyboard_linux.GLFWKeyHelper.modifierCapsLock*/get modifierCapsLock() {
      return 16;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierControl*/get modifierControl() {
      return 2;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierAlt*/get modifierAlt() {
      return 4;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierMeta*/get modifierMeta() {
      return 8;
    },
    /*raw_keyboard_linux.GLFWKeyHelper.modifierNumericPad*/get modifierNumericPad() {
      return 32;
    }
  });
  const _isLeftRightModifierPressed = dart.privateName(raw_keyboard_macos, "_isLeftRightModifierPressed");
  raw_keyboard_macos.RawKeyEventDataMacOs = class RawKeyEventDataMacOs extends raw_keyboard.RawKeyEventData {
    get characters() {
      return this[characters$];
    }
    set characters(value) {
      super.characters = value;
    }
    get charactersIgnoringModifiers() {
      return this[charactersIgnoringModifiers$];
    }
    set charactersIgnoringModifiers(value) {
      super.charactersIgnoringModifiers = value;
    }
    get keyCode() {
      return this[keyCode$0];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get modifiers() {
      return this[modifiers$0];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.charactersIgnoringModifiers[$isEmpty] ? null : this.charactersIgnoringModifiers;
    }
    get physicalKey() {
      let t9;
      t9 = keyboard_maps.kMacOsToPhysicalKey[$_get](this.keyCode);
      return t9 == null ? keyboard_key.PhysicalKeyboardKey.none : t9;
    }
    get logicalKey() {
      let t9, t9$;
      let numPadKey = keyboard_maps.kMacOsNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        if (!(this.charactersIgnoringModifiers.length <= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 84, 14, "charactersIgnoringModifiers.length <= 2");
        let codeUnit = this.charactersIgnoringModifiers[$codeUnitAt](0);
        if (this.charactersIgnoringModifiers.length === 2) {
          let secondCode = this.charactersIgnoringModifiers[$codeUnitAt](1);
          codeUnit = (codeUnit << 16 | secondCode) >>> 0;
        }
        let keyId = (0 | (codeUnit & 4294967295.0) >>> 0) >>> 0;
        t9 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t9 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t9;
      }
      if (!dart.equals(this.physicalKey, keyboard_key.PhysicalKeyboardKey.none)) {
        let keyId = (dart.notNull(this.physicalKey.usbHidUsage) | 4294967296.0) >>> 0;
        t9$ = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t9$ == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.physicalKey.debugName, debugName: this.physicalKey.debugName}) : t9$;
      }
      return new keyboard_key.LogicalKeyboardKey.new((21474836480.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown macOS key code " + dart.str(this.keyCode)});
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C547 || CT.C547:
        {
          return true;
        }
        case C550 || CT.C550:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C548 || CT.C548:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C549 || CT.C549:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C547 || CT.C547;
      let independentModifier = (dart.notNull(this.modifiers) & 4294901760.0) >>> 0;
      switch (key) {
        case C552 || CT.C552:
        {
          return this[_isLeftRightModifierPressed](side, (independentModifier & 262144) >>> 0, 1, 8192);
        }
        case C553 || CT.C553:
        {
          return this[_isLeftRightModifierPressed](side, (independentModifier & 131072) >>> 0, 2, 4);
        }
        case C554 || CT.C554:
        {
          return this[_isLeftRightModifierPressed](side, (independentModifier & 524288) >>> 0, 32, 64);
        }
        case C555 || CT.C555:
        {
          return this[_isLeftRightModifierPressed](side, (independentModifier & 1048576) >>> 0, 8, 16);
        }
        case C556 || CT.C556:
        {
          return (independentModifier & 65536) !== 0;
        }
        case C557 || CT.C557:
        {
          return (independentModifier & 2097152) !== 0;
        }
        case C559 || CT.C559:
        {
          return (independentModifier & 8388608) !== 0;
        }
        case C560 || CT.C560:
        case C558 || CT.C558:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.modifiers) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case C552 || CT.C552:
        {
          return findSide(1, 8192);
        }
        case C553 || CT.C553:
        {
          return findSide(2, 4);
        }
        case C554 || CT.C554:
        {
          return findSide(32, 64);
        }
        case C555 || CT.C555:
        {
          return findSide(8, 16);
        }
        case C556 || CT.C556:
        case C557 || CT.C557:
        case C558 || CT.C558:
        case C559 || CT.C559:
        case C560 || CT.C560:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 219, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + ", keyCode: " + dart.str(this.keyCode) + ", characters: " + dart.str(this.characters) + "," + " unmodifiedCharacters: " + dart.str(this.charactersIgnoringModifiers) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_macos.RawKeyEventDataMacOs.new = function(opts) {
    let characters = opts && 'characters' in opts ? opts.characters : "";
    let charactersIgnoringModifiers = opts && 'charactersIgnoringModifiers' in opts ? opts.charactersIgnoringModifiers : "";
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[characters$] = characters;
    this[charactersIgnoringModifiers$] = charactersIgnoringModifiers;
    this[keyCode$0] = keyCode;
    this[modifiers$0] = modifiers;
    if (!(characters != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 30, 16, "characters != null");
    if (!(charactersIgnoringModifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 31, 16, "charactersIgnoringModifiers != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 32, 16, "keyCode != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_macos.dart", 33, 16, "modifiers != null");
    raw_keyboard_macos.RawKeyEventDataMacOs.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_macos.RawKeyEventDataMacOs.prototype;
  dart.addTypeTests(raw_keyboard_macos.RawKeyEventDataMacOs);
  const characters$ = Symbol("RawKeyEventDataMacOs.characters");
  const charactersIgnoringModifiers$ = Symbol("RawKeyEventDataMacOs.charactersIgnoringModifiers");
  const keyCode$0 = Symbol("RawKeyEventDataMacOs.keyCode");
  const modifiers$0 = Symbol("RawKeyEventDataMacOs.modifiers");
  dart.setMethodSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getMethods(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getGetters(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_macos.RawKeyEventDataMacOs, "package:flutter_web/src/services/raw_keyboard_macos.dart");
  dart.setFieldSignature(raw_keyboard_macos.RawKeyEventDataMacOs, () => ({
    __proto__: dart.getFields(raw_keyboard_macos.RawKeyEventDataMacOs.__proto__),
    characters: dart.finalFieldType(core.String),
    charactersIgnoringModifiers: dart.finalFieldType(core.String),
    keyCode: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_macos.RawKeyEventDataMacOs, ['toString']);
  dart.defineLazy(raw_keyboard_macos.RawKeyEventDataMacOs, {
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCapsLock*/get modifierCapsLock() {
      return 65536;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierShift*/get modifierShift() {
      return 131072;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierControl*/get modifierControl() {
      return 262144;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftControl*/get modifierLeftControl() {
      return 1;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightControl*/get modifierRightControl() {
      return 8192;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierOption*/get modifierOption() {
      return 524288;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftOption*/get modifierLeftOption() {
      return 32;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightOption*/get modifierRightOption() {
      return 64;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierCommand*/get modifierCommand() {
      return 1048576;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierLeftCommand*/get modifierLeftCommand() {
      return 8;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierRightCommand*/get modifierRightCommand() {
      return 16;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierNumericPad*/get modifierNumericPad() {
      return 2097152;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierHelp*/get modifierHelp() {
      return 4194304;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.modifierFunction*/get modifierFunction() {
      return 8388608;
    },
    /*raw_keyboard_macos.RawKeyEventDataMacOs.deviceIndependentMask*/get deviceIndependentMask() {
      return 4294901760.0;
    }
  });
  const _isLeftRightModifierPressed$ = dart.privateName(raw_keyboard_fuchsia, "_isLeftRightModifierPressed");
  raw_keyboard_fuchsia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$1];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    get keyLabel() {
      return this.codePoint === 0 ? null : core.String.fromCharCode(this.codePoint);
    }
    get logicalKey() {
      if (this.codePoint !== 0) {
        return new keyboard_key.LogicalKeyboardKey.new((0 | (dart.notNull(this.codePoint) & 4294967295.0) >>> 0) >>> 0, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + dart.str(this.keyLabel)});
      }
      let newKey = keyboard_maps.kFuchsiaToLogicalKey[$_get]((dart.notNull(this.hidUsage) | 4294967296.0) >>> 0);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((12884901888.0 | dart.notNull(this.hidUsage) | 1099511627776.0) >>> 0, {debugName: false ? null : "Ephemeral Fuchsia key code " + dart.str(this.hidUsage)}) : null;
      return newKey;
    }
    get physicalKey() {
      let t9;
      t9 = keyboard_maps.kFuchsiaToPhysicalKey[$_get](this.hidUsage);
      return t9 == null ? keyboard_key.PhysicalKeyboardKey.none : t9;
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C547 || CT.C547:
        {
          return true;
        }
        case C550 || CT.C550:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case C548 || CT.C548:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case C549 || CT.C549:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C547 || CT.C547;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuchsia.dart", 121, 12, "side != null");
      switch (key) {
        case C552 || CT.C552:
        {
          return this[_isLeftRightModifierPressed$](side, 24, 8, 16);
        }
        case C553 || CT.C553:
        {
          return this[_isLeftRightModifierPressed$](side, 6, 2, 4);
        }
        case C554 || CT.C554:
        {
          return this[_isLeftRightModifierPressed$](side, 96, 32, 64);
        }
        case C555 || CT.C555:
        {
          return this[_isLeftRightModifierPressed$](side, 384, 128, 256);
        }
        case C556 || CT.C556:
        {
          return (dart.notNull(this.modifiers) & 1) !== 0;
        }
        case C557 || CT.C557:
        case C558 || CT.C558:
        case C559 || CT.C559:
        case C560 || CT.C560:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, combinedMask) => {
        let combined = (dart.notNull(this.modifiers) & dart.notNull(combinedMask)) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case C552 || CT.C552:
        {
          return findSide(8, 16, 24);
        }
        case C553 || CT.C553:
        {
          return findSide(2, 4, 6);
        }
        case C554 || CT.C554:
        {
          return findSide(32, 64, 96);
        }
        case C555 || CT.C555:
        {
          return findSide(128, 256, 384);
        }
        case C556 || CT.C556:
        {
          return (dart.notNull(this.modifiers) & 1) === 0 ? null : raw_keyboard.KeyboardSide.all;
        }
        case C557 || CT.C557:
        case C558 || CT.C558:
        case C559 || CT.C559:
        case C560 || CT.C560:
        {
          return null;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuchsia.dart", 181, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_fuchsia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$0] = codePoint;
    this[modifiers$1] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuchsia.dart", 28, 16, "hidUsage != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuchsia.dart", 29, 16, "codePoint != null");
    if (!(modifiers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuchsia.dart", 30, 16, "modifiers != null");
    raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_fuchsia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(raw_keyboard_fuchsia.RawKeyEventDataFuchsia);
  const hidUsage$ = Symbol("RawKeyEventDataFuchsia.hidUsage");
  const codePoint$0 = Symbol("RawKeyEventDataFuchsia.codePoint");
  const modifiers$1 = Symbol("RawKeyEventDataFuchsia.modifiers");
  dart.setMethodSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getGetters(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    keyLabel: core.String,
    logicalKey: keyboard_key.LogicalKeyboardKey,
    physicalKey: keyboard_key.PhysicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, "package:flutter_web/src/services/raw_keyboard_fuchsia.dart");
  dart.setFieldSignature(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(raw_keyboard_fuchsia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(raw_keyboard_fuchsia.RawKeyEventDataFuchsia, {
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return 6;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return 24;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return 96;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*raw_keyboard_fuchsia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return 384;
    }
  });
  const _isLeftRightModifierPressed$0 = dart.privateName(raw_keyboard_android, "_isLeftRightModifierPressed");
  raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$1];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get plainCodePoint() {
      return this[plainCodePoint$];
    }
    set plainCodePoint(value) {
      super.plainCodePoint = value;
    }
    get keyCode() {
      return this[keyCode$1];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$0];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get keyLabel() {
      return this.plainCodePoint === 0 ? null : core.String.fromCharCode((dart.notNull(this.plainCodePoint) & 2147483647) >>> 0);
    }
    get physicalKey() {
      let t9;
      t9 = keyboard_maps.kAndroidToPhysicalKey[$_get](this.scanCode);
      return t9 == null ? keyboard_key.PhysicalKeyboardKey.none : t9;
    }
    get logicalKey() {
      let t9;
      let numPadKey = keyboard_maps.kAndroidNumPadMap[$_get](this.keyCode);
      if (numPadKey != null) {
        return numPadKey;
      }
      if (this.keyLabel != null && this.keyLabel[$isNotEmpty] && !dart.test(keyboard_key.LogicalKeyboardKey.isControlCharacter(this.keyLabel))) {
        let combinedCodePoint = (dart.notNull(this.plainCodePoint) & 2147483647) >>> 0;
        let keyId = (0 | (combinedCodePoint & 4294967295.0) >>> 0) >>> 0;
        t9 = keyboard_key.LogicalKeyboardKey.findKeyByKeyId(keyId);
        return t9 == null ? new keyboard_key.LogicalKeyboardKey.new(keyId, {keyLabel: this.keyLabel, debugName: false ? null : "Key " + this.keyLabel[$toUpperCase]()}) : t9;
      }
      let newKey = keyboard_maps.kAndroidToLogicalKey[$_get](this.keyCode);
      if (newKey != null) {
        return newKey;
      }
      newKey == null ? newKey = new keyboard_key.LogicalKeyboardKey.new((8589934592.0 | dart.notNull(this.keyCode) | 1099511627776.0) >>> 0, {debugName: false ? null : "Unknown Android key code " + dart.str(this.keyCode)}) : null;
      return newKey;
    }
    [_isLeftRightModifierPressed$0](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case C547 || CT.C547:
        {
          return true;
        }
        case C550 || CT.C550:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case C548 || CT.C548:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case C549 || CT.C549:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : C547 || CT.C547;
      if (!(side != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 184, 12, "side != null");
      switch (key) {
        case C552 || CT.C552:
        {
          return this[_isLeftRightModifierPressed$0](side, 4096, 8192, 16384);
        }
        case C553 || CT.C553:
        {
          return this[_isLeftRightModifierPressed$0](side, 1, 64, 128);
        }
        case C554 || CT.C554:
        {
          return this[_isLeftRightModifierPressed$0](side, 2, 16, 32);
        }
        case C555 || CT.C555:
        {
          return this[_isLeftRightModifierPressed$0](side, 65536, 131072, 262144);
        }
        case C556 || CT.C556:
        {
          return (dart.notNull(this.metaState) & 1048576) !== 0;
        }
        case C557 || CT.C557:
        {
          return (dart.notNull(this.metaState) & 2097152) !== 0;
        }
        case C558 || CT.C558:
        {
          return (dart.notNull(this.metaState) & 4194304) !== 0;
        }
        case C559 || CT.C559:
        {
          return (dart.notNull(this.metaState) & 8) !== 0;
        }
        case C560 || CT.C560:
        {
          return (dart.notNull(this.metaState) & 4) !== 0;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case C552 || CT.C552:
        {
          return findSide(8192, 16384);
        }
        case C553 || CT.C553:
        {
          return findSide(64, 128);
        }
        case C554 || CT.C554:
        {
          return findSide(16, 32);
        }
        case C555 || CT.C555:
        {
          return findSide(131072, 262144);
        }
        case C556 || CT.C556:
        case C557 || CT.C557:
        case C558 || CT.C558:
        case C559 || CT.C559:
        case C560 || CT.C560:
        {
          return raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.", "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 244, 12, "false");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(keyLabel: " + dart.str(this.keyLabel) + " flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", " + "keyCode: " + dart.str(this.keyCode) + ", scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let plainCodePoint = opts && 'plainCodePoint' in opts ? opts.plainCodePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    this[flags$] = flags;
    this[codePoint$1] = codePoint;
    this[plainCodePoint$] = plainCodePoint;
    this[keyCode$1] = keyCode;
    this[scanCode$0] = scanCode;
    this[metaState$] = metaState;
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 37, 16, "flags != null");
    if (!(codePoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 38, 16, "codePoint != null");
    if (!(keyCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 39, 16, "keyCode != null");
    if (!(scanCode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 40, 16, "scanCode != null");
    if (!(metaState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart", 41, 16, "metaState != null");
    raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(raw_keyboard_android.RawKeyEventDataAndroid);
  const flags$ = Symbol("RawKeyEventDataAndroid.flags");
  const codePoint$1 = Symbol("RawKeyEventDataAndroid.codePoint");
  const plainCodePoint$ = Symbol("RawKeyEventDataAndroid.plainCodePoint");
  const keyCode$1 = Symbol("RawKeyEventDataAndroid.keyCode");
  const scanCode$0 = Symbol("RawKeyEventDataAndroid.scanCode");
  const metaState$ = Symbol("RawKeyEventDataAndroid.metaState");
  dart.setMethodSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$0]: dart.fnType(core.bool, [raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [raw_keyboard.ModifierKey], {side: raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(raw_keyboard.KeyboardSide, [raw_keyboard.ModifierKey])
  }));
  dart.setGetterSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getGetters(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    keyLabel: core.String,
    physicalKey: keyboard_key.PhysicalKeyboardKey,
    logicalKey: keyboard_key.LogicalKeyboardKey
  }));
  dart.setLibraryUri(raw_keyboard_android.RawKeyEventDataAndroid, "package:flutter_web/src/services/raw_keyboard_android.dart");
  dart.setFieldSignature(raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    plainCodePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(raw_keyboard_android.RawKeyEventDataAndroid, {
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  });
  dart.defineLazy(raw_keyboard_android, {
    /*raw_keyboard_android._kCombiningCharacterMask*/get _kCombiningCharacterMask() {
      return 2147483647;
    }
  });
  const _nextPlatformViewId = dart.privateName(platform_views, "_nextPlatformViewId");
  platform_views.PlatformViewsRegistry = class PlatformViewsRegistry extends core.Object {
    getNextPlatformViewId() {
      let t9;
      t9 = this[_nextPlatformViewId];
      this[_nextPlatformViewId] = dart.notNull(t9) + 1;
      return t9;
    }
  };
  (platform_views.PlatformViewsRegistry._instance = function() {
    this[_nextPlatformViewId] = 0;
    ;
  }).prototype = platform_views.PlatformViewsRegistry.prototype;
  dart.addTypeTests(platform_views.PlatformViewsRegistry);
  dart.setMethodSignature(platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getMethods(platform_views.PlatformViewsRegistry.__proto__),
    getNextPlatformViewId: dart.fnType(core.int, [])
  }));
  dart.setLibraryUri(platform_views.PlatformViewsRegistry, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getFields(platform_views.PlatformViewsRegistry.__proto__),
    [_nextPlatformViewId]: dart.fieldType(core.int)
  }));
  const _focusCallbacks = dart.privateName(platform_views, "_focusCallbacks");
  const _onMethodCall = dart.privateName(platform_views, "_onMethodCall");
  platform_views.PlatformViewsService = class PlatformViewsService extends core.Object {
    static get _instance() {
      platform_views.PlatformViewsService._serviceInstance == null ? platform_views.PlatformViewsService._serviceInstance = new platform_views.PlatformViewsService.__() : null;
      return platform_views.PlatformViewsService._serviceInstance;
    }
    [_onMethodCall](call) {
      switch (call.method) {
        case "viewFocused":
        {
          let id = core.int._check(call.arguments);
          if (dart.test(this[_focusCallbacks][$containsKey](id))) {
            this[_focusCallbacks][$_get](id)();
          }
          break;
        }
        default:
        {
          dart.throw(new core.UnimplementedError.new(dart.str(call.method) + " was invoked but isn't implemented by PlatformViewsService"));
        }
      }
      return null;
    }
    static initAndroidView(opts) {
      let t9;
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onFocus = opts && 'onFocus' in opts ? opts.onFocus : null;
      if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 118, 12, "id != null");
      if (!(viewType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 119, 12, "viewType != null");
      if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 120, 12, "layoutDirection != null");
      if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 121, 12, "creationParams == null || creationParamsCodec != null");
      let controller = new platform_views.AndroidViewController.__(id, viewType, creationParams, creationParamsCodec, layoutDirection);
      platform_views.PlatformViewsService._instance[_focusCallbacks][$_set](id, (t9 = onFocus, t9 == null ? dart.fn(() => {
      }, VoidToNull()) : t9));
      return controller;
    }
    static initUiKitView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return async.async(platform_views.UiKitViewController, function* initUiKitView() {
        if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 151, 12, "id != null");
        if (!(viewType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 152, 12, "viewType != null");
        if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 153, 12, "layoutDirection != null");
        if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 154, 12, "creationParams == null || creationParamsCodec != null");
        let args = new (IdentityMapOfString$dynamic()).from(["id", id, "viewType", viewType]);
        if (creationParams != null) {
          let paramsByteData = creationParamsCodec.encodeMessage(creationParams);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
        return new platform_views.UiKitViewController.__(id, layoutDirection);
      });
    }
    static initHtmlView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 180, 12, "id != null");
      if (!(viewType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 181, 12, "viewType != null");
      if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 182, 12, "layoutDirection != null");
      let controller = new platform_views.HtmlViewController.__(id, viewType, layoutDirection);
      return controller;
    }
  };
  (platform_views.PlatformViewsService.__ = function() {
    this[_focusCallbacks] = new (IdentityMapOfint$VoidTovoid()).new();
    system_channels.SystemChannels.platform_views.setMethodCallHandler(dart.bind(this, _onMethodCall));
  }).prototype = platform_views.PlatformViewsService.prototype;
  dart.addTypeTests(platform_views.PlatformViewsService);
  dart.setMethodSignature(platform_views.PlatformViewsService, () => ({
    __proto__: dart.getMethods(platform_views.PlatformViewsService.__proto__),
    [_onMethodCall]: dart.fnType(async.Future$(dart.void), [message_codec.MethodCall])
  }));
  dart.setLibraryUri(platform_views.PlatformViewsService, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.PlatformViewsService, () => ({
    __proto__: dart.getFields(platform_views.PlatformViewsService.__proto__),
    [_focusCallbacks]: dart.finalFieldType(core.Map$(core.int, dart.fnType(dart.void, [])))
  }));
  dart.defineLazy(platform_views.PlatformViewsService, {
    /*platform_views.PlatformViewsService._serviceInstance*/get _serviceInstance() {
      return null;
    },
    set _serviceInstance(_) {}
  });
  const _asList = dart.privateName(platform_views, "_asList");
  platform_views.AndroidPointerProperties = class AndroidPointerProperties extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get toolType() {
      return this[toolType$];
    }
    set toolType(value) {
      super.toolType = value;
    }
    [_asList]() {
      return JSArrayOfint().of([this.id, this.toolType]);
    }
    toString() {
      return "AndroidPointerProperties(id: " + dart.str(this.id) + ", toolType: " + dart.str(this.toolType) + ")";
    }
  };
  (platform_views.AndroidPointerProperties.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let toolType = opts && 'toolType' in opts ? opts.toolType : null;
    this[id$] = id;
    this[toolType$] = toolType;
    if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 202, 16, "id != null");
    if (!(toolType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 203, 16, "toolType != null");
    ;
  }).prototype = platform_views.AndroidPointerProperties.prototype;
  dart.addTypeTests(platform_views.AndroidPointerProperties);
  const id$ = Symbol("AndroidPointerProperties.id");
  const toolType$ = Symbol("AndroidPointerProperties.toolType");
  dart.setMethodSignature(platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getMethods(platform_views.AndroidPointerProperties.__proto__),
    [_asList]: dart.fnType(core.List$(core.int), [])
  }));
  dart.setLibraryUri(platform_views.AndroidPointerProperties, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getFields(platform_views.AndroidPointerProperties.__proto__),
    id: dart.finalFieldType(core.int),
    toolType: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(platform_views.AndroidPointerProperties, ['toString']);
  dart.defineLazy(platform_views.AndroidPointerProperties, {
    /*platform_views.AndroidPointerProperties.kToolTypeUnknown*/get kToolTypeUnknown() {
      return 0;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeFinger*/get kToolTypeFinger() {
      return 1;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeStylus*/get kToolTypeStylus() {
      return 2;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeMouse*/get kToolTypeMouse() {
      return 3;
    },
    /*platform_views.AndroidPointerProperties.kToolTypeEraser*/get kToolTypeEraser() {
      return 4;
    }
  });
  platform_views.AndroidPointerCoords = class AndroidPointerCoords extends core.Object {
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get toolMajor() {
      return this[toolMajor$];
    }
    set toolMajor(value) {
      super.toolMajor = value;
    }
    get toolMinor() {
      return this[toolMinor$];
    }
    set toolMinor(value) {
      super.toolMinor = value;
    }
    get touchMajor() {
      return this[touchMajor$];
    }
    set touchMajor(value) {
      super.touchMajor = value;
    }
    get touchMinor() {
      return this[touchMinor$];
    }
    set touchMinor(value) {
      super.touchMinor = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    [_asList]() {
      return JSArrayOfdouble().of([this.orientation, this.pressure, this.size, this.toolMajor, this.toolMinor, this.touchMajor, this.touchMinor, this.x, this.y]);
    }
    toString() {
      return "AndroidPointerCoords(orientation: " + dart.str(this.orientation) + ", pressure: " + dart.str(this.pressure) + ", size: " + dart.str(this.size) + ", toolMajor: " + dart.str(this.toolMajor) + ", toolMinor: " + dart.str(this.toolMinor) + ", touchMajor: " + dart.str(this.touchMajor) + ", touchMinor: " + dart.str(this.touchMinor) + ", x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ")";
    }
  };
  (platform_views.AndroidPointerCoords.new = function(opts) {
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let toolMajor = opts && 'toolMajor' in opts ? opts.toolMajor : null;
    let toolMinor = opts && 'toolMinor' in opts ? opts.toolMinor : null;
    let touchMajor = opts && 'touchMajor' in opts ? opts.touchMajor : null;
    let touchMinor = opts && 'touchMinor' in opts ? opts.touchMinor : null;
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    this[orientation$] = orientation;
    this[pressure$] = pressure;
    this[size$] = size;
    this[toolMajor$] = toolMajor;
    this[toolMinor$] = toolMinor;
    this[touchMajor$] = touchMajor;
    this[touchMinor$] = touchMinor;
    this[x$] = x;
    this[y$] = y;
    if (!(orientation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 252, 16, "orientation != null");
    if (!(pressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 253, 16, "pressure != null");
    if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 254, 16, "size != null");
    if (!(toolMajor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 255, 16, "toolMajor != null");
    if (!(toolMinor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 256, 16, "toolMinor != null");
    if (!(touchMajor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 257, 16, "touchMajor != null");
    if (!(touchMinor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 258, 16, "touchMinor != null");
    if (!(x != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 259, 16, "x != null");
    if (!(y != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 260, 16, "y != null");
    ;
  }).prototype = platform_views.AndroidPointerCoords.prototype;
  dart.addTypeTests(platform_views.AndroidPointerCoords);
  const orientation$ = Symbol("AndroidPointerCoords.orientation");
  const pressure$ = Symbol("AndroidPointerCoords.pressure");
  const size$ = Symbol("AndroidPointerCoords.size");
  const toolMajor$ = Symbol("AndroidPointerCoords.toolMajor");
  const toolMinor$ = Symbol("AndroidPointerCoords.toolMinor");
  const touchMajor$ = Symbol("AndroidPointerCoords.touchMajor");
  const touchMinor$ = Symbol("AndroidPointerCoords.touchMinor");
  const x$ = Symbol("AndroidPointerCoords.x");
  const y$ = Symbol("AndroidPointerCoords.y");
  dart.setMethodSignature(platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getMethods(platform_views.AndroidPointerCoords.__proto__),
    [_asList]: dart.fnType(core.List$(core.double), [])
  }));
  dart.setLibraryUri(platform_views.AndroidPointerCoords, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getFields(platform_views.AndroidPointerCoords.__proto__),
    orientation: dart.finalFieldType(core.double),
    pressure: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    toolMajor: dart.finalFieldType(core.double),
    toolMinor: dart.finalFieldType(core.double),
    touchMajor: dart.finalFieldType(core.double),
    touchMinor: dart.finalFieldType(core.double),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(platform_views.AndroidPointerCoords, ['toString']);
  platform_views.AndroidMotionEvent = class AndroidMotionEvent extends core.Object {
    get downTime() {
      return this[downTime$];
    }
    set downTime(value) {
      super.downTime = value;
    }
    get eventTime() {
      return this[eventTime$];
    }
    set eventTime(value) {
      super.eventTime = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    get pointerProperties() {
      return this[pointerProperties$];
    }
    set pointerProperties(value) {
      super.pointerProperties = value;
    }
    get pointerCoords() {
      return this[pointerCoords$];
    }
    set pointerCoords(value) {
      super.pointerCoords = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get buttonState() {
      return this[buttonState$];
    }
    set buttonState(value) {
      super.buttonState = value;
    }
    get xPrecision() {
      return this[xPrecision$];
    }
    set xPrecision(value) {
      super.xPrecision = value;
    }
    get yPrecision() {
      return this[yPrecision$];
    }
    set yPrecision(value) {
      super.yPrecision = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get edgeFlags() {
      return this[edgeFlags$];
    }
    set edgeFlags(value) {
      super.edgeFlags = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get flags() {
      return this[flags$0];
    }
    set flags(value) {
      super.flags = value;
    }
    [_asList](viewId) {
      return [viewId, this.downTime, this.eventTime, this.action, this.pointerCount, this.pointerProperties[$map](ListOfint(), dart.fn(p => p[_asList](), AndroidPointerPropertiesToListOfint()))[$toList](), this.pointerCoords[$map](ListOfdouble(), dart.fn(p => p[_asList](), AndroidPointerCoordsToListOfdouble()))[$toList](), this.metaState, this.buttonState, this.xPrecision, this.yPrecision, this.deviceId, this.edgeFlags, this.source, this.flags];
    }
    toString() {
      return "AndroidPointerEvent(downTime: " + dart.str(this.downTime) + ", eventTime: " + dart.str(this.eventTime) + ", action: " + dart.str(this.action) + ", pointerCount: " + dart.str(this.pointerCount) + ", pointerProperties: " + dart.str(this.pointerProperties) + ", pointerCoords: " + dart.str(this.pointerCoords) + ", metaState: " + dart.str(this.metaState) + ", buttonState: " + dart.str(this.buttonState) + ", xPrecision: " + dart.str(this.xPrecision) + ", yPrecision: " + dart.str(this.yPrecision) + ", deviceId: " + dart.str(this.deviceId) + ", edgeFlags: " + dart.str(this.edgeFlags) + ", source: " + dart.str(this.source) + ", flags: " + dart.str(this.flags) + ")";
    }
  };
  (platform_views.AndroidMotionEvent.new = function(opts) {
    let downTime = opts && 'downTime' in opts ? opts.downTime : null;
    let eventTime = opts && 'eventTime' in opts ? opts.eventTime : null;
    let action = opts && 'action' in opts ? opts.action : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : null;
    let pointerProperties = opts && 'pointerProperties' in opts ? opts.pointerProperties : null;
    let pointerCoords = opts && 'pointerCoords' in opts ? opts.pointerCoords : null;
    let metaState = opts && 'metaState' in opts ? opts.metaState : null;
    let buttonState = opts && 'buttonState' in opts ? opts.buttonState : null;
    let xPrecision = opts && 'xPrecision' in opts ? opts.xPrecision : null;
    let yPrecision = opts && 'yPrecision' in opts ? opts.yPrecision : null;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
    let edgeFlags = opts && 'edgeFlags' in opts ? opts.edgeFlags : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let flags = opts && 'flags' in opts ? opts.flags : null;
    this[downTime$] = downTime;
    this[eventTime$] = eventTime;
    this[action$] = action;
    this[pointerCount$] = pointerCount;
    this[pointerProperties$] = pointerProperties;
    this[pointerCoords$] = pointerCoords;
    this[metaState$0] = metaState;
    this[buttonState$] = buttonState;
    this[xPrecision$] = xPrecision;
    this[yPrecision$] = yPrecision;
    this[deviceId$] = deviceId;
    this[edgeFlags$] = edgeFlags;
    this[source$] = source;
    this[flags$0] = flags;
    if (!(downTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 339, 16, "downTime != null");
    if (!(eventTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 340, 16, "eventTime != null");
    if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 341, 16, "action != null");
    if (!(pointerCount != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 342, 16, "pointerCount != null");
    if (!(pointerProperties != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 343, 16, "pointerProperties != null");
    if (!(pointerCoords != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 344, 16, "pointerCoords != null");
    if (!(metaState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 345, 16, "metaState != null");
    if (!(buttonState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 346, 16, "buttonState != null");
    if (!(xPrecision != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 347, 16, "xPrecision != null");
    if (!(yPrecision != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 348, 16, "yPrecision != null");
    if (!(deviceId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 349, 16, "deviceId != null");
    if (!(edgeFlags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 350, 16, "edgeFlags != null");
    if (!(source != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 351, 16, "source != null");
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 352, 16, "flags != null");
    if (!(pointerProperties[$length] == pointerCount)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 353, 16, "pointerProperties.length == pointerCount");
    if (!(pointerCoords[$length] == pointerCount)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 354, 16, "pointerCoords.length == pointerCount");
    ;
  }).prototype = platform_views.AndroidMotionEvent.prototype;
  dart.addTypeTests(platform_views.AndroidMotionEvent);
  const downTime$ = Symbol("AndroidMotionEvent.downTime");
  const eventTime$ = Symbol("AndroidMotionEvent.eventTime");
  const action$ = Symbol("AndroidMotionEvent.action");
  const pointerCount$ = Symbol("AndroidMotionEvent.pointerCount");
  const pointerProperties$ = Symbol("AndroidMotionEvent.pointerProperties");
  const pointerCoords$ = Symbol("AndroidMotionEvent.pointerCoords");
  const metaState$0 = Symbol("AndroidMotionEvent.metaState");
  const buttonState$ = Symbol("AndroidMotionEvent.buttonState");
  const xPrecision$ = Symbol("AndroidMotionEvent.xPrecision");
  const yPrecision$ = Symbol("AndroidMotionEvent.yPrecision");
  const deviceId$ = Symbol("AndroidMotionEvent.deviceId");
  const edgeFlags$ = Symbol("AndroidMotionEvent.edgeFlags");
  const source$ = Symbol("AndroidMotionEvent.source");
  const flags$0 = Symbol("AndroidMotionEvent.flags");
  dart.setMethodSignature(platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getMethods(platform_views.AndroidMotionEvent.__proto__),
    [_asList]: dart.fnType(core.List, [core.int])
  }));
  dart.setLibraryUri(platform_views.AndroidMotionEvent, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getFields(platform_views.AndroidMotionEvent.__proto__),
    downTime: dart.finalFieldType(core.int),
    eventTime: dart.finalFieldType(core.int),
    action: dart.finalFieldType(core.int),
    pointerCount: dart.finalFieldType(core.int),
    pointerProperties: dart.finalFieldType(core.List$(platform_views.AndroidPointerProperties)),
    pointerCoords: dart.finalFieldType(core.List$(platform_views.AndroidPointerCoords)),
    metaState: dart.finalFieldType(core.int),
    buttonState: dart.finalFieldType(core.int),
    xPrecision: dart.finalFieldType(core.double),
    yPrecision: dart.finalFieldType(core.double),
    deviceId: dart.finalFieldType(core.int),
    edgeFlags: dart.finalFieldType(core.int),
    source: dart.finalFieldType(core.int),
    flags: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(platform_views.AndroidMotionEvent, ['toString']);
  const _name$3 = dart.privateName(platform_views, "_name");
  let C562;
  let C563;
  let C564;
  let C565;
  let C566;
  let C567;
  platform_views._PlatformViewState = class _PlatformViewState extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (platform_views._PlatformViewState.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = platform_views._PlatformViewState.prototype;
  dart.addTypeTests(platform_views._PlatformViewState);
  dart.setLibraryUri(platform_views._PlatformViewState, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views._PlatformViewState, () => ({
    __proto__: dart.getFields(platform_views._PlatformViewState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(platform_views._PlatformViewState, ['toString']);
  platform_views._PlatformViewState.waitingForSize = C562 || CT.C562;
  platform_views._PlatformViewState.creating = C563 || CT.C563;
  platform_views._PlatformViewState.created = C564 || CT.C564;
  platform_views._PlatformViewState.createFailed = C565 || CT.C565;
  platform_views._PlatformViewState.disposed = C566 || CT.C566;
  platform_views._PlatformViewState.values = C567 || CT.C567;
  const _textureId = dart.privateName(platform_views, "_textureId");
  const _platformViewCreatedCallbacks = dart.privateName(platform_views, "_platformViewCreatedCallbacks");
  const _viewType = dart.privateName(platform_views, "_viewType");
  const _creationParams = dart.privateName(platform_views, "_creationParams");
  const _creationParamsCodec = dart.privateName(platform_views, "_creationParamsCodec");
  const _layoutDirection = dart.privateName(platform_views, "_layoutDirection");
  const _state = dart.privateName(platform_views, "_state");
  const _create = dart.privateName(platform_views, "_create");
  let C568;
  let C569;
  platform_views.AndroidViewController = class AndroidViewController extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get textureId() {
      return this[_textureId];
    }
    get isCreated() {
      return dart.equals(this[_state], platform_views._PlatformViewState.created);
    }
    addOnPlatformViewCreatedListener(listener) {
      if (!(listener != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 545, 12, "listener != null");
      if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 546, 12, "_state != _PlatformViewState.disposed");
      this[_platformViewCreatedCallbacks][$add](listener);
    }
    removeOnPlatformViewCreatedListener(listener) {
      if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 553, 12, "_state != _PlatformViewState.disposed");
      this[_platformViewCreatedCallbacks][$remove](listener);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (dart.equals(this[_state], platform_views._PlatformViewState.creating) || dart.equals(this[_state], platform_views._PlatformViewState.created)) yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
        this[_platformViewCreatedCallbacks][$clear]();
        this[_state] = platform_views._PlatformViewState.disposed;
      }).bind(this));
    }
    setSize(size) {
      return async.async(dart.void, (function* setSize() {
        if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed("trying to size a disposed Android View. View id: " + dart.str(this.id), "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 577, 12, "_state != _PlatformViewState.disposed");
        if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 580, 12, "size != null");
        if (!!dart.test(size.isEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 581, 12, "!size.isEmpty");
        if (dart.equals(this[_state], platform_views._PlatformViewState.waitingForSize)) return this[_create](size);
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "resize", new (IdentityMapOfString$dynamic()).from(["id", this.id, "width", size.width, "height", size.height]));
      }).bind(this));
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed("trying to set a layout direction for a disposed UIView. View id: " + dart.str(this.id), "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 595, 12, "_state != _PlatformViewState.disposed");
        if (dart.equals(layoutDirection, this[_layoutDirection])) return;
        if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 600, 12, "layoutDirection != null");
        this[_layoutDirection] = layoutDirection;
        if (dart.equals(this[_state], platform_views._PlatformViewState.waitingForSize)) return;
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "setDirection", new (IdentityMapOfString$dynamic()).from(["id", this.id, "direction", platform_views.AndroidViewController._getAndroidDirection(layoutDirection)]));
      }).bind(this));
    }
    clearFocus() {
      if (!dart.equals(this[_state], platform_views._PlatformViewState.created)) {
        return null;
      }
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "clearFocus", this.id);
    }
    static _getAndroidDirection(direction) {
      if (!(direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 623, 12, "direction != null");
      switch (direction) {
        case C568 || CT.C568:
        {
          return 0;
        }
        case C569 || CT.C569:
        {
          return 1;
        }
      }
      return null;
    }
    sendMotionEvent(event) {
      return async.async(dart.void, (function* sendMotionEvent() {
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.dynamic, "touch", event[_asList](this.id));
      }).bind(this));
    }
    static pointerAction(pointerId, action) {
      return dart.notNull(pointerId) << 8 & 65280 | dart.notNull(action) & 255;
    }
    [_create](size) {
      return async.async(dart.void, (function* _create() {
        let args = new (IdentityMapOfString$dynamic()).from(["id", this.id, "viewType", this[_viewType], "width", size.width, "height", size.height, "direction", platform_views.AndroidViewController._getAndroidDirection(this[_layoutDirection])]);
        if (this[_creationParams] != null) {
          let paramsByteData = this[_creationParamsCodec].encodeMessage(this[_creationParams]);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        this[_textureId] = (yield system_channels.SystemChannels.platform_views.invokeMethod(core.int, "create", args));
        this[_state] = platform_views._PlatformViewState.created;
        for (let callback of this[_platformViewCreatedCallbacks]) {
          callback(this.id);
        }
      }).bind(this));
    }
  };
  (platform_views.AndroidViewController.__ = function(id, viewType, creationParams, creationParamsCodec, layoutDirection) {
    this[_textureId] = null;
    this[_platformViewCreatedCallbacks] = JSArrayOfintTovoid().of([]);
    this[id$0] = id;
    if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 468, 16, "id != null");
    if (!(viewType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 469, 16, "viewType != null");
    if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 470, 16, "layoutDirection != null");
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 471, 16, "creationParams == null || creationParamsCodec != null");
    this[_viewType] = viewType;
    this[_creationParams] = creationParams;
    this[_creationParamsCodec] = creationParamsCodec;
    this[_layoutDirection] = layoutDirection;
    this[_state] = platform_views._PlatformViewState.waitingForSize;
    ;
  }).prototype = platform_views.AndroidViewController.prototype;
  dart.addTypeTests(platform_views.AndroidViewController);
  const id$0 = Symbol("AndroidViewController.id");
  dart.setMethodSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getMethods(platform_views.AndroidViewController.__proto__),
    addOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    removeOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    dispose: dart.fnType(async.Future$(dart.void), []),
    setSize: dart.fnType(async.Future$(dart.void), [ui.Size]),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui.TextDirection]),
    clearFocus: dart.fnType(async.Future$(dart.void), []),
    sendMotionEvent: dart.fnType(async.Future$(dart.void), [platform_views.AndroidMotionEvent]),
    [_create]: dart.fnType(async.Future$(dart.void), [ui.Size])
  }));
  dart.setGetterSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getGetters(platform_views.AndroidViewController.__proto__),
    textureId: core.int,
    isCreated: core.bool
  }));
  dart.setLibraryUri(platform_views.AndroidViewController, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.AndroidViewController, () => ({
    __proto__: dart.getFields(platform_views.AndroidViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_viewType]: dart.finalFieldType(core.String),
    [_textureId]: dart.fieldType(core.int),
    [_layoutDirection]: dart.fieldType(ui.TextDirection),
    [_state]: dart.fieldType(platform_views._PlatformViewState),
    [_creationParams]: dart.fieldType(dart.dynamic),
    [_creationParamsCodec]: dart.fieldType(message_codec.MessageCodec),
    [_platformViewCreatedCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.int])))
  }));
  dart.defineLazy(platform_views.AndroidViewController, {
    /*platform_views.AndroidViewController.kActionDown*/get kActionDown() {
      return 0;
    },
    /*platform_views.AndroidViewController.kActionUp*/get kActionUp() {
      return 1;
    },
    /*platform_views.AndroidViewController.kActionMove*/get kActionMove() {
      return 2;
    },
    /*platform_views.AndroidViewController.kActionCancel*/get kActionCancel() {
      return 3;
    },
    /*platform_views.AndroidViewController.kActionPointerDown*/get kActionPointerDown() {
      return 5;
    },
    /*platform_views.AndroidViewController.kActionPointerUp*/get kActionPointerUp() {
      return 6;
    },
    /*platform_views.AndroidViewController.kAndroidLayoutDirectionLtr*/get kAndroidLayoutDirectionLtr() {
      return 0;
    },
    /*platform_views.AndroidViewController.kAndroidLayoutDirectionRtl*/get kAndroidLayoutDirectionRtl() {
      return 1;
    }
  });
  const _debugDisposed = dart.privateName(platform_views, "_debugDisposed");
  platform_views.UiKitViewController = class UiKitViewController extends core.Object {
    get id() {
      return this[id$1];
    }
    set id(value) {
      super.id = value;
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.test(this[_debugDisposed])) dart.assertFailed("trying to set a layout direction for a disposed iOS UIView. View id: " + dart.str(this.id), "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 701, 12, "!_debugDisposed");
        if (dart.equals(layoutDirection, this[_layoutDirection])) return;
        if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 706, 12, "layoutDirection != null");
        this[_layoutDirection] = layoutDirection;
      }).bind(this));
    }
    acceptGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "acceptGesture", args);
    }
    rejectGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "rejectGesture", args);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        this[_debugDisposed] = true;
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
      }).bind(this));
    }
  };
  (platform_views.UiKitViewController.__ = function(id, layoutDirection) {
    this[_debugDisposed] = false;
    this[id$1] = id;
    if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 685, 16, "id != null");
    if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 686, 16, "layoutDirection != null");
    this[_layoutDirection] = layoutDirection;
    ;
  }).prototype = platform_views.UiKitViewController.prototype;
  dart.addTypeTests(platform_views.UiKitViewController);
  const id$1 = Symbol("UiKitViewController.id");
  dart.setMethodSignature(platform_views.UiKitViewController, () => ({
    __proto__: dart.getMethods(platform_views.UiKitViewController.__proto__),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui.TextDirection]),
    acceptGesture: dart.fnType(async.Future$(dart.void), []),
    rejectGesture: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setLibraryUri(platform_views.UiKitViewController, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.UiKitViewController, () => ({
    __proto__: dart.getFields(platform_views.UiKitViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_layoutDirection]: dart.fieldType(ui.TextDirection)
  }));
  platform_views.HtmlViewController = class HtmlViewController extends core.Object {
    get id() {
      return this[id$2];
    }
    set id(value) {
      super.id = value;
    }
    get isCreated() {
      return dart.equals(this[_state], platform_views._PlatformViewState.created);
    }
    addOnPlatformViewCreatedListener(listener) {
      if (!(listener != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 781, 12, "listener != null");
      if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 782, 12, "_state != _PlatformViewState.disposed");
      this[_platformViewCreatedCallbacks][$add](listener);
    }
    removeOnPlatformViewCreatedListener(listener) {
      if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 789, 12, "_state != _PlatformViewState.disposed");
      this[_platformViewCreatedCallbacks][$remove](listener);
    }
    acceptGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "acceptGesture", args);
    }
    rejectGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "rejectGesture", args);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (dart.equals(this[_state], platform_views._PlatformViewState.creating) || dart.equals(this[_state], platform_views._PlatformViewState.created)) yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
        this[_platformViewCreatedCallbacks][$clear]();
        this[_state] = platform_views._PlatformViewState.disposed;
      }).bind(this));
    }
    setSize(size) {
      return async.async(dart.void, (function* setSize() {
        if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed("trying to size a disposed HTML View. View id: " + dart.str(this.id), "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 837, 12, "_state != _PlatformViewState.disposed");
        if (!(size != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 840, 12, "size != null");
        if (!!dart.test(size.isEmpty)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 841, 12, "!size.isEmpty");
        if (dart.equals(this[_state], platform_views._PlatformViewState.waitingForSize)) return this[_create](size);
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "resize", new (IdentityMapOfString$dynamic()).from(["id", this.id, "width", size.width, "height", size.height]));
      }).bind(this));
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.equals(this[_state], platform_views._PlatformViewState.disposed)) dart.assertFailed("trying to set a layout direction for a disposed HTML View. View id: " + dart.str(this.id), "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 855, 12, "_state != _PlatformViewState.disposed");
        if (dart.equals(layoutDirection, this[_layoutDirection])) return;
        if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 860, 12, "layoutDirection != null");
        this[_layoutDirection] = layoutDirection;
        if (dart.equals(this[_state], platform_views._PlatformViewState.waitingForSize)) return;
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "setDirection", new (IdentityMapOfString$dynamic()).from(["id", this.id, "direction", dart.equals(layoutDirection, ui.TextDirection.ltr) ? 0 : 1]));
      }).bind(this));
    }
    [_create](size) {
      return async.async(dart.void, (function* _create() {
        let args = new (IdentityMapOfString$dynamic()).from(["id", this.id, "viewType", this[_viewType], "width", size.width, "height", size.height, "direction", dart.equals(this[_layoutDirection], ui.TextDirection.ltr) ? 0 : 1]);
        yield system_channels.SystemChannels.platform_views.invokeMethod(dart.dynamic, "create", args);
        this[_state] = platform_views._PlatformViewState.created;
        for (let callback of this[_platformViewCreatedCallbacks]) {
          callback(this.id);
        }
      }).bind(this));
    }
  };
  (platform_views.HtmlViewController.__ = function(id, viewType, layoutDirection) {
    this[_platformViewCreatedCallbacks] = JSArrayOfintTovoid().of([]);
    this[id$2] = id;
    if (!(id != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 756, 16, "id != null");
    if (!(viewType != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 757, 16, "viewType != null");
    if (!(layoutDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart", 758, 16, "layoutDirection != null");
    this[_viewType] = viewType;
    this[_layoutDirection] = layoutDirection;
    this[_state] = platform_views._PlatformViewState.waitingForSize;
    ;
  }).prototype = platform_views.HtmlViewController.prototype;
  dart.addTypeTests(platform_views.HtmlViewController);
  const id$2 = Symbol("HtmlViewController.id");
  dart.setMethodSignature(platform_views.HtmlViewController, () => ({
    __proto__: dart.getMethods(platform_views.HtmlViewController.__proto__),
    addOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    removeOnPlatformViewCreatedListener: dart.fnType(dart.void, [dart.fnType(dart.void, [core.int])]),
    acceptGesture: dart.fnType(async.Future$(dart.void), []),
    rejectGesture: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), []),
    setSize: dart.fnType(async.Future$(dart.void), [ui.Size]),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui.TextDirection]),
    [_create]: dart.fnType(async.Future$(dart.void), [ui.Size])
  }));
  dart.setGetterSignature(platform_views.HtmlViewController, () => ({
    __proto__: dart.getGetters(platform_views.HtmlViewController.__proto__),
    isCreated: core.bool
  }));
  dart.setLibraryUri(platform_views.HtmlViewController, "package:flutter_web/src/services/platform_views.dart");
  dart.setFieldSignature(platform_views.HtmlViewController, () => ({
    __proto__: dart.getFields(platform_views.HtmlViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_viewType]: dart.finalFieldType(core.String),
    [_layoutDirection]: dart.fieldType(ui.TextDirection),
    [_state]: dart.fieldType(platform_views._PlatformViewState),
    [_platformViewCreatedCallbacks]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [core.int])))
  }));
  dart.defineLazy(platform_views, {
    /*platform_views.platformViewsRegistry*/get platformViewsRegistry() {
      return new platform_views.PlatformViewsRegistry._instance();
    }
  });
  text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.TextInputFormatter);
  dart.setLibraryUri(text_formatter.TextInputFormatter, "package:flutter_web/src/services/text_formatter.dart");
  text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      return this.formatFunction(oldValue, newValue);
    }
  };
  (text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_formatter.dart", 64, 16, "formatFunction != null");
    ;
  }).prototype = text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter._SimpleTextInputFormatter, "package:flutter_web/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue]))
  }));
  text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get blacklistedPattern() {
      return this[blacklistedPattern$];
    }
    set blacklistedPattern(value) {
      super.blacklistedPattern = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => substring[$replaceAll](this.blacklistedPattern, this.replacementString), StringToString()));
    }
  };
  (text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[blacklistedPattern$] = blacklistedPattern;
    this[replacementString$] = replacementString;
    if (!(blacklistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_formatter.dart", 99, 15, "blacklistedPattern != null");
    ;
  }).prototype = text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.BlacklistingTextInputFormatter);
  const blacklistedPattern$ = Symbol("BlacklistingTextInputFormatter.blacklistedPattern");
  const replacementString$ = Symbol("BlacklistingTextInputFormatter.replacementString");
  dart.setMethodSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.BlacklistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.BlacklistingTextInputFormatter, "package:flutter_web/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: dart.finalFieldType(core.Pattern),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(text_formatter.BlacklistingTextInputFormatter, {
    /*text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  });
  text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (this.maxLength != null && dart.notNull(this.maxLength) > 0 && dart.notNull(newValue.text[$runes][$length]) > dart.notNull(this.maxLength)) {
        let newSelection = newValue.selection.copyWith({baseOffset: math.min(core.int, newValue.selection.start, this.maxLength), extentOffset: math.min(core.int, newValue.selection.end, this.maxLength)});
        let iterator = new core.RuneIterator.new(newValue.text);
        if (dart.test(iterator.moveNext())) for (let count = 0; count < dart.notNull(this.maxLength); count = count + 1)
          if (!dart.test(iterator.moveNext())) break;
        let truncated = newValue.text[$substring](0, iterator.rawIndex);
        return new text_input.TextEditingValue.new({text: truncated, selection: newSelection, composing: text_editing.TextRange.empty});
      }
      return newValue;
    }
  };
  (text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_formatter.dart", 140, 16, "maxLength == null || maxLength == -1 || maxLength > 0");
    ;
  }).prototype = text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.LengthLimitingTextInputFormatter);
  const maxLength$ = Symbol("LengthLimitingTextInputFormatter.maxLength");
  dart.setMethodSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.LengthLimitingTextInputFormatter, "package:flutter_web/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(core.int)
  }));
  text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends text_formatter.TextInputFormatter {
    get whitelistedPattern() {
      return this[whitelistedPattern$];
    }
    set whitelistedPattern(value) {
      super.whitelistedPattern = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => this.whitelistedPattern[$allMatches](substring)[$map](core.String, dart.fn(match => match.group(0), MatchToString()))[$join](), StringToString()));
    }
  };
  (text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    this[whitelistedPattern$] = whitelistedPattern;
    if (!(whitelistedPattern != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/services/text_formatter.dart", 220, 16, "ssert(whitelistedPattern !");
    ;
  }).prototype = text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(text_formatter.WhitelistingTextInputFormatter);
  const whitelistedPattern$ = Symbol("WhitelistingTextInputFormatter.whitelistedPattern");
  dart.setMethodSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(text_formatter.WhitelistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue, text_input.TextEditingValue])
  }));
  dart.setLibraryUri(text_formatter.WhitelistingTextInputFormatter, "package:flutter_web/src/services/text_formatter.dart");
  dart.setFieldSignature(text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getFields(text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(text_formatter.WhitelistingTextInputFormatter, {
    /*text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  });
  text_formatter._selectionAwareTextManipulation = function _selectionAwareTextManipulation(value, substringManipulation) {
    let t9;
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new text_input.TextEditingValue.new({text: manipulatedText, selection: (t9 = manipulatedSelection, t9 == null ? C528 || CT.C528 : t9), composing: manipulatedText == value.text ? value.composing : text_editing.TextRange.empty});
  };
  haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (haptic_feedback.HapticFeedback.__ = function() {
    ;
  }).prototype = haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(haptic_feedback.HapticFeedback);
  dart.setLibraryUri(haptic_feedback.HapticFeedback, "package:flutter_web/src/services/haptic_feedback.dart");
  clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
  };
  (clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$0] = text;
    ;
  }).prototype = clipboard.ClipboardData.prototype;
  dart.addTypeTests(clipboard.ClipboardData);
  const text$0 = Symbol("ClipboardData.text");
  dart.setLibraryUri(clipboard.ClipboardData, "package:flutter_web/src/services/clipboard.dart");
  dart.setFieldSignature(clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(clipboard.ClipboardData, function* getData() {
        let result = (yield system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new clipboard.ClipboardData.new({text: core.String._check(result[$_get]("text"))});
      });
    }
  };
  (clipboard.Clipboard.__ = function() {
    ;
  }).prototype = clipboard.Clipboard.prototype;
  dart.addTypeTests(clipboard.Clipboard);
  dart.setLibraryUri(clipboard.Clipboard, "package:flutter_web/src/services/clipboard.dart");
  dart.defineLazy(clipboard.Clipboard, {
    /*clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  });
  dart.trackLibraries("packages/flutter_web/src/services/clipboard", {
    "package:flutter_web/src/services/keyboard_maps.dart": keyboard_maps,
    "package:flutter_web/src/services/keyboard_key.dart": keyboard_key,
    "package:flutter_web/src/services/platform_channel.dart": platform_channel,
    "package:flutter_web/src/services/platform_messages.dart": platform_messages,
    "package:flutter_web/src/services/message_codecs.dart": message_codecs,
    "package:flutter_web/src/services/message_codec.dart": message_codec,
    "package:flutter_web/src/services/system_navigator.dart": system_navigator,
    "package:flutter_web/src/services/system_channels.dart": system_channels,
    "package:flutter_web/src/services/text_editing.dart": text_editing,
    "package:flutter_web/src/services/text_input.dart": text_input,
    "package:flutter_web/src/services/system_chrome.dart": system_chrome,
    "package:flutter_web/src/services/system_sound.dart": system_sound,
    "package:flutter_web/src/services/raw_keyboard.dart": raw_keyboard,
    "package:flutter_web/src/services/raw_keyboard_linux.dart": raw_keyboard_linux,
    "package:flutter_web/src/services/raw_keyboard_macos.dart": raw_keyboard_macos,
    "package:flutter_web/src/services/raw_keyboard_fuchsia.dart": raw_keyboard_fuchsia,
    "package:flutter_web/src/services/raw_keyboard_android.dart": raw_keyboard_android,
    "package:flutter_web/src/services/platform_views.dart": platform_views,
    "package:flutter_web/src/services/text_formatter.dart": text_formatter,
    "package:flutter_web/src/services/haptic_feedback.dart": haptic_feedback,
    "package:flutter_web/src/services/clipboard.dart": clipboard
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["keyboard_maps.dart","keyboard_key.dart","platform_channel.dart","platform_messages.dart","message_codecs.dart","message_codec.dart","system_navigator.dart","system_channels.dart","text_editing.dart","text_input.dart","system_chrome.dart","system_sound.dart","raw_keyboard.dart","raw_keyboard_linux.dart","raw_keyboard_macos.dart","raw_keyboard_fuchsia.dart","raw_keyboard_android.dart","platform_views.dart","text_formatter.dart","haptic_feedback.dart","clipboard.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAemC,kCAAoB;;;MA0JnB,mCAAqB;;;MA0LtB,+BAAiB;;;MAwBjB,kCAAoB;;;MA+OnB,mC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","file":"clipboard.ddc.js"}');
  // Exports:
  return {
    src__services__keyboard_maps: keyboard_maps,
    src__services__keyboard_key: keyboard_key,
    src__services__platform_channel: platform_channel,
    src__services__platform_messages: platform_messages,
    src__services__message_codecs: message_codecs,
    src__services__message_codec: message_codec,
    src__services__system_navigator: system_navigator,
    src__services__system_channels: system_channels,
    src__services__text_editing: text_editing,
    src__services__text_input: text_input,
    src__services__system_chrome: system_chrome,
    src__services__system_sound: system_sound,
    src__services__raw_keyboard: raw_keyboard,
    src__services__raw_keyboard_linux: raw_keyboard_linux,
    src__services__raw_keyboard_macos: raw_keyboard_macos,
    src__services__raw_keyboard_fuchsia: raw_keyboard_fuchsia,
    src__services__raw_keyboard_android: raw_keyboard_android,
    src__services__platform_views: platform_views,
    src__services__text_formatter: text_formatter,
    src__services__haptic_feedback: haptic_feedback,
    src__services__clipboard: clipboard
  };
});

//# sourceMappingURL=clipboard.ddc.js.map
