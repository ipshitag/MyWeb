define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/scheduler/binding'], function(dart_sdk, packages__flutter_web__src__foundation__assertions, packages__flutter_web_ui__ui, packages__flutter_web__src__scheduler__binding) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const print = packages__flutter_web__src__foundation__assertions.src__foundation__print;
  const assertions = packages__flutter_web__src__foundation__assertions.src__foundation__assertions;
  const diagnostics = packages__flutter_web__src__foundation__assertions.src__foundation__diagnostics;
  const binding = packages__flutter_web__src__foundation__assertions.src__foundation__binding;
  const change_notifier = packages__flutter_web__src__foundation__assertions.src__foundation__change_notifier;
  const ui = packages__flutter_web_ui__ui.ui;
  const binding$ = packages__flutter_web__src__scheduler__binding.src__scheduler__binding;
  const arena = Object.create(dart.library);
  const debug = Object.create(dart.library);
  const util = Object.create(dart.library);
  const pointer_router = Object.create(dart.library);
  const events = Object.create(dart.library);
  const scale = Object.create(dart.library);
  const velocity_tracker = Object.create(dart.library);
  const lsq_solver = Object.create(dart.library);
  const recognizer = Object.create(dart.library);
  const team = Object.create(dart.library);
  const binding$0 = Object.create(dart.library);
  const pointer_signal_resolver = Object.create(dart.library);
  const hit_test = Object.create(dart.library);
  const converter = Object.create(dart.library);
  const constants = Object.create(dart.library);
  const tap = Object.create(dart.library);
  const eager = Object.create(dart.library);
  const force_press = Object.create(dart.library);
  const mouse_tracking = Object.create(dart.library);
  const drag$ = Object.create(dart.library);
  const drag_details = Object.create(dart.library);
  const long_press = Object.create(dart.library);
  const multidrag = Object.create(dart.library);
  const multitap = Object.create(dart.library);
  const monodrag = Object.create(dart.library);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $join = dartx.join;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $length = dartx.length;
  const $contains = dartx.contains;
  const $containsKey = dartx.containsKey;
  const $padRight = dartx.padRight;
  const $leftShift = dartx['<<'];
  const $_set = dartx._set;
  const $keys = dartx.keys;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $clear = dartx.clear;
  const $values = dartx.values;
  const $containsValue = dartx.containsValue;
  const $times = dartx['*'];
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $noSuchMethod = dartx.noSuchMethod;
  const $isNaN = dartx.isNaN;
  const $clamp = dartx.clamp;
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $toRadixString = dartx.toRadixString;
  const $forEach = dartx.forEach;
  const $toSet = dartx.toSet;
  const $toList = dartx.toList;
  let JSArrayOfGestureArenaMember = () => (JSArrayOfGestureArenaMember = dart.constFn(_interceptors.JSArray$(arena.GestureArenaMember)))();
  let GestureArenaMemberToString = () => (GestureArenaMemberToString = dart.constFn(dart.fnType(core.String, [arena.GestureArenaMember])))();
  let IdentityMapOfint$_GestureArena = () => (IdentityMapOfint$_GestureArena = dart.constFn(_js_helper.IdentityMap$(core.int, arena._GestureArena)))();
  let VoidTo_GestureArena = () => (VoidTo_GestureArena = dart.constFn(dart.fnType(arena._GestureArena, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let PointerEventTovoid = () => (PointerEventTovoid = dart.constFn(dart.fnType(dart.void, [events.PointerEvent])))();
  let LinkedHashSetOfPointerEventTovoid = () => (LinkedHashSetOfPointerEventTovoid = dart.constFn(collection.LinkedHashSet$(PointerEventTovoid())))();
  let IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = () => (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid = dart.constFn(_js_helper.IdentityMap$(core.int, LinkedHashSetOfPointerEventTovoid())))();
  let _HashSetOfPointerEventTovoid = () => (_HashSetOfPointerEventTovoid = dart.constFn(collection._HashSet$(PointerEventTovoid())))();
  let VoidToLinkedHashSetOfPointerEventTovoid = () => (VoidToLinkedHashSetOfPointerEventTovoid = dart.constFn(dart.fnType(LinkedHashSetOfPointerEventTovoid(), [])))();
  let DiagnosticsPropertyOfPointerEvent = () => (DiagnosticsPropertyOfPointerEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerEvent = () => (IterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerEvent(), [])))();
  let ListOfPointerEventTovoid = () => (ListOfPointerEventTovoid = dart.constFn(core.List$(PointerEventTovoid())))();
  let DiagnosticsPropertyOfOffset = () => (DiagnosticsPropertyOfOffset = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Offset)))();
  let DiagnosticsPropertyOfDuration = () => (DiagnosticsPropertyOfDuration = dart.constFn(diagnostics.DiagnosticsProperty$(core.Duration)))();
  let EnumPropertyOfPointerDeviceKind = () => (EnumPropertyOfPointerDeviceKind = dart.constFn(diagnostics.EnumProperty$(ui.PointerDeviceKind)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let IdentityMapOfint$VelocityTracker = () => (IdentityMapOfint$VelocityTracker = dart.constFn(_js_helper.IdentityMap$(core.int, velocity_tracker.VelocityTracker)))();
  let IdentityMapOfint$Offset = () => (IdentityMapOfint$Offset = dart.constFn(_js_helper.IdentityMap$(core.int, ui.Offset)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let IdentityMapOfint$GestureArenaEntry = () => (IdentityMapOfint$GestureArenaEntry = dart.constFn(_js_helper.IdentityMap$(core.int, arena.GestureArenaEntry)))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let ListOfGestureArenaEntry = () => (ListOfGestureArenaEntry = dart.constFn(core.List$(arena.GestureArenaEntry)))();
  let IdentityMapOfint$PointerDeviceKind = () => (IdentityMapOfint$PointerDeviceKind = dart.constFn(_js_helper.IdentityMap$(core.int, ui.PointerDeviceKind)))();
  let DiagnosticsPropertyOfGestureRecognizer = () => (DiagnosticsPropertyOfGestureRecognizer = dart.constFn(diagnostics.DiagnosticsProperty$(recognizer.GestureRecognizer)))();
  let SyncIterableOfDiagnosticsNode = () => (SyncIterableOfDiagnosticsNode = dart.constFn(_js_helper.SyncIterable$(diagnostics.DiagnosticsNode)))();
  let IterableOfDiagnosticsNode = () => (IterableOfDiagnosticsNode = dart.constFn(core.Iterable$(diagnostics.DiagnosticsNode)))();
  let VoidToIterableOfDiagnosticsNode = () => (VoidToIterableOfDiagnosticsNode = dart.constFn(dart.fnType(IterableOfDiagnosticsNode(), [])))();
  let DiagnosticsPropertyOfObject = () => (DiagnosticsPropertyOfObject = dart.constFn(diagnostics.DiagnosticsProperty$(core.Object)))();
  let ListOf_PointAtTime = () => (ListOf_PointAtTime = dart.constFn(core.List$(velocity_tracker._PointAtTime)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let EnumPropertyOfGestureRecognizerState = () => (EnumPropertyOfGestureRecognizerState = dart.constFn(diagnostics.EnumProperty$(recognizer.GestureRecognizerState)))();
  let IdentityMapOfint$_CombiningGestureArenaMember = () => (IdentityMapOfint$_CombiningGestureArenaMember = dart.constFn(_js_helper.IdentityMap$(core.int, team._CombiningGestureArenaMember)))();
  let VoidTo_CombiningGestureArenaMember = () => (VoidTo_CombiningGestureArenaMember = dart.constFn(dart.fnType(team._CombiningGestureArenaMember, [])))();
  let ListQueueOfPointerEvent = () => (ListQueueOfPointerEvent = dart.constFn(collection.ListQueue$(events.PointerEvent)))();
  let IdentityMapOfint$HitTestResult = () => (IdentityMapOfint$HitTestResult = dart.constFn(_js_helper.IdentityMap$(core.int, hit_test.HitTestResult)))();
  let DiagnosticsPropertyOfHitTestTarget = () => (DiagnosticsPropertyOfHitTestTarget = dart.constFn(diagnostics.DiagnosticsProperty$(hit_test.HitTestTarget)))();
  let SyncIterableOfDiagnosticsPropertyOfObject = () => (SyncIterableOfDiagnosticsPropertyOfObject = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfObject())))();
  let IterableOfDiagnosticsPropertyOfObject = () => (IterableOfDiagnosticsPropertyOfObject = dart.constFn(core.Iterable$(DiagnosticsPropertyOfObject())))();
  let VoidToIterableOfDiagnosticsPropertyOfObject = () => (VoidToIterableOfDiagnosticsPropertyOfObject = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfObject(), [])))();
  let DiagnosticsPropertyOfPointerSignalEvent = () => (DiagnosticsPropertyOfPointerSignalEvent = dart.constFn(diagnostics.DiagnosticsProperty$(events.PointerSignalEvent)))();
  let SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let IterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (IterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(core.Iterable$(DiagnosticsPropertyOfPointerSignalEvent())))();
  let VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = () => (VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfPointerSignalEvent(), [])))();
  let JSArrayOfHitTestEntry = () => (JSArrayOfHitTestEntry = dart.constFn(_interceptors.JSArray$(hit_test.HitTestEntry)))();
  let VoidTo_PointerState = () => (VoidTo_PointerState = dart.constFn(dart.fnType(converter._PointerState, [])))();
  let SyncIterableOfPointerEvent = () => (SyncIterableOfPointerEvent = dart.constFn(_js_helper.SyncIterable$(events.PointerEvent)))();
  let IdentityMapOfint$_PointerState = () => (IdentityMapOfint$_PointerState = dart.constFn(_js_helper.IdentityMap$(core.int, converter._PointerState)))();
  let doubleAnddoubleAnddoubleTodouble = () => (doubleAnddoubleAnddoubleTodouble = dart.constFn(dart.fnType(core.double, [core.double, core.double, core.double])))();
  let LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  let LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = () => (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation = dart.constFn(_js_helper.LinkedMap$(mouse_tracking.MouseTrackerAnnotation, mouse_tracking._TrackedAnnotation)))();
  let IdentityMapOfint$PointerEvent = () => (IdentityMapOfint$PointerEvent = dart.constFn(_js_helper.IdentityMap$(core.int, events.PointerEvent)))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let _TrackedAnnotationAndintTovoid = () => (_TrackedAnnotationAndintTovoid = dart.constFn(dart.fnType(dart.void, [mouse_tracking._TrackedAnnotation, core.int])))();
  let _TrackedAnnotationTovoid = () => (_TrackedAnnotationTovoid = dart.constFn(dart.fnType(dart.void, [mouse_tracking._TrackedAnnotation])))();
  let MouseTrackerAnnotationTo_TrackedAnnotation = () => (MouseTrackerAnnotationTo_TrackedAnnotation = dart.constFn(dart.fnType(mouse_tracking._TrackedAnnotation, [mouse_tracking.MouseTrackerAnnotation])))();
  let OffsetToDrag = () => (OffsetToDrag = dart.constFn(dart.fnType(drag$.Drag, [ui.Offset])))();
  let VoidToDrag = () => (VoidToDrag = dart.constFn(dart.fnType(drag$.Drag, [])))();
  let IdentityMapOfint$_TapTracker = () => (IdentityMapOfint$_TapTracker = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapTracker)))();
  let IdentityMapOfint$_TapGesture = () => (IdentityMapOfint$_TapGesture = dart.constFn(_js_helper.IdentityMap$(core.int, multitap._TapGesture)))();
  let ListOf_TapGesture = () => (ListOf_TapGesture = dart.constFn(core.List$(multitap._TapGesture)))();
  let VoidToString = () => (VoidToString = dart.constFn(dart.fnType(core.String, [])))();
  let EnumPropertyOfDragStartBehavior = () => (EnumPropertyOfDragStartBehavior = dart.constFn(diagnostics.EnumProperty$(recognizer.DragStartBehavior)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$]: "GestureDisposition.accepted",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: arena.GestureDisposition.prototype,
        [_name$]: "GestureDisposition.rejected",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], arena.GestureDisposition);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.touch",
        index: 0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.mouse",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$0]: "_ScaleState.ready",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$0]: "_ScaleState.possible",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$0]: "_ScaleState.accepted",
        index: 2
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: scale._ScaleState.prototype,
        [_name$0]: "_ScaleState.started",
        index: 3
      });
    },
    get C11() {
      return C11 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], scale._ScaleState);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: velocity_tracker.Velocity.prototype,
        pixelsPerSecond: C5 || CT.C5
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$1]: "DragStartBehavior.down",
        index: 0
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$1]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C15() {
      return C15 = dart.constList([C13 || CT.C13, C14 || CT.C14], recognizer.DragStartBehavior);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$1]: "GestureRecognizerState.ready",
        index: 0
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$1]: "GestureRecognizerState.possible",
        index: 1
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: recognizer.GestureRecognizerState.prototype,
        [_name$1]: "GestureRecognizerState.defunct",
        index: 2
      });
    },
    get C19() {
      return C19 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], recognizer.GestureRecognizerState);
    },
    get C20() {
      return C20 = dart.const(new _js_helper.PrivateSymbol.new('_member', _member));
    },
    get C21() {
      return C21 = dart.const(new _js_helper.PrivateSymbol.new('_arena', _arena));
    },
    get C22() {
      return C22 = dart.const(new _js_helper.PrivateSymbol.new('_pointer', _pointer$0));
    },
    get C23() {
      return C23 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.add",
        index: 1
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.hover",
        index: 3
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.down",
        index: 4
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.move",
        index: 5
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.up",
        index: 6
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.cancel",
        index: 0
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: ui.PointerChange.prototype,
        [_name]: "PointerChange.remove",
        index: 2
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.scroll",
        index: 1
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.none",
        index: 0
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: ui.PointerSignalKind.prototype,
        [_name]: "PointerSignalKind.unknown",
        index: 2
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.stylus",
        index: 2
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: ui.PointerDeviceKind.prototype,
        [_name]: "PointerDeviceKind.invertedStylus",
        index: 3
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 100000
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 150000
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 500000
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 300000
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 40000
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 3000000
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$2]: "_ForceState.ready",
        index: 0
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$2]: "_ForceState.possible",
        index: 1
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$2]: "_ForceState.accepted",
        index: 2
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$2]: "_ForceState.started",
        index: 3
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: force_press._ForceState.prototype,
        [_name$2]: "_ForceState.peaked",
        index: 4
      });
    },
    get C46() {
      return C46 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], force_press._ForceState);
    },
    get C47() {
      return C47 = dart.fn(force_press.ForcePressGestureRecognizer._inverseLerp, doubleAnddoubleAnddoubleTodouble());
    },
    get C48() {
      return C48 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$3]: "_DragState.ready",
        index: 0
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$3]: "_DragState.possible",
        index: 1
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: monodrag._DragState.prototype,
        [_name$3]: "_DragState.accepted",
        index: 2
      });
    },
    get C51() {
      return C51 = dart.constList([C48 || CT.C48, C49 || CT.C49, C50 || CT.C50], monodrag._DragState);
    }
  });
  const _name$ = dart.privateName(arena, "_name");
  let C0;
  let C1;
  let C2;
  arena.GestureDisposition = class GestureDisposition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (arena.GestureDisposition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = arena.GestureDisposition.prototype;
  dart.addTypeTests(arena.GestureDisposition);
  dart.setLibraryUri(arena.GestureDisposition, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureDisposition, () => ({
    __proto__: dart.getFields(arena.GestureDisposition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(arena.GestureDisposition, ['toString']);
  arena.GestureDisposition.accepted = C0 || CT.C0;
  arena.GestureDisposition.rejected = C1 || CT.C1;
  arena.GestureDisposition.values = C2 || CT.C2;
  arena.GestureArenaMember = class GestureArenaMember extends core.Object {};
  (arena.GestureArenaMember.new = function() {
    ;
  }).prototype = arena.GestureArenaMember.prototype;
  dart.addTypeTests(arena.GestureArenaMember);
  dart.setLibraryUri(arena.GestureArenaMember, "package:flutter_web/src/gestures/arena.dart");
  const _arena$ = dart.privateName(arena, "_arena");
  const _pointer$ = dart.privateName(arena, "_pointer");
  const _member$ = dart.privateName(arena, "_member");
  const _resolve = dart.privateName(arena, "_resolve");
  arena.GestureArenaEntry = class GestureArenaEntry extends core.Object {
    resolve(disposition) {
      this[_arena$][_resolve](this[_pointer$], this[_member$], disposition);
    }
  };
  (arena.GestureArenaEntry.__ = function(_arena, _pointer, _member) {
    this[_arena$] = _arena;
    this[_pointer$] = _pointer;
    this[_member$] = _member;
    ;
  }).prototype = arena.GestureArenaEntry.prototype;
  dart.addTypeTests(arena.GestureArenaEntry);
  dart.setMethodSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getMethods(arena.GestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setLibraryUri(arena.GestureArenaEntry, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaEntry, () => ({
    __proto__: dart.getFields(arena.GestureArenaEntry.__proto__),
    [_arena$]: dart.finalFieldType(arena.GestureArenaManager),
    [_pointer$]: dart.finalFieldType(core.int),
    [_member$]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  arena._GestureArena = class _GestureArena extends core.Object {
    add(member) {
      if (!dart.test(this.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 70, 12, "isOpen");
      this.members[$add](member);
    }
    toString() {
      if (dart.test(util.assertionsEnabled)) {
        let buffer = new core.StringBuffer.new();
        if (dart.test(this.members[$isEmpty])) {
          buffer.write("<empty>");
        } else {
          buffer.write(this.members[$map](core.String, dart.fn(member => {
            if (dart.equals(member, this.eagerWinner)) return dart.str(member) + " (eager winner)";
            return dart.str(member);
          }, GestureArenaMemberToString()))[$join](", "));
        }
        if (dart.test(this.isOpen)) buffer.write(" [open]");
        if (dart.test(this.isHeld)) buffer.write(" [held]");
        if (dart.test(this.hasPendingSweep)) buffer.write(" [hasPendingSweep]");
        return buffer.toString();
      } else {
        return super[$toString]();
      }
    }
  };
  (arena._GestureArena.new = function() {
    this.members = JSArrayOfGestureArenaMember().of([]);
    this.isOpen = true;
    this.isHeld = false;
    this.hasPendingSweep = false;
    this.eagerWinner = null;
    ;
  }).prototype = arena._GestureArena.prototype;
  dart.addTypeTests(arena._GestureArena);
  dart.setMethodSignature(arena._GestureArena, () => ({
    __proto__: dart.getMethods(arena._GestureArena.__proto__),
    add: dart.fnType(dart.void, [arena.GestureArenaMember])
  }));
  dart.setLibraryUri(arena._GestureArena, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(arena._GestureArena, () => ({
    __proto__: dart.getFields(arena._GestureArena.__proto__),
    members: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    isOpen: dart.fieldType(core.bool),
    isHeld: dart.fieldType(core.bool),
    hasPendingSweep: dart.fieldType(core.bool),
    eagerWinner: dart.fieldType(arena.GestureArenaMember)
  }));
  dart.defineExtensionMethods(arena._GestureArena, ['toString']);
  const _arenas = dart.privateName(arena, "_arenas");
  const _debugLogDiagnostic = dart.privateName(arena, "_debugLogDiagnostic");
  const _tryToResolveArena = dart.privateName(arena, "_tryToResolveArena");
  const _resolveInFavorOf = dart.privateName(arena, "_resolveInFavorOf");
  const _resolveByDefault = dart.privateName(arena, "_resolveByDefault");
  arena.GestureArenaManager = class GestureArenaManager extends core.Object {
    add(pointer, member) {
      let state = this[_arenas][$putIfAbsent](pointer, dart.fn(() => {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "★ Opening new gesture arena."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 109, 14, "_debugLogDiagnostic(pointer, '★ Opening new gesture arena.");
        return new arena._GestureArena.new();
      }, VoidTo_GestureArena()));
      state.add(member);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Adding: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 113, 12, "t(_debugLogDiagnostic(pointer, 'Adding: $member");
      return new arena.GestureArenaEntry.__(this, pointer, member);
    }
    close(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isOpen = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Closing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 125, 12, "t(_debugLogDiagnostic(pointer, 'Closing', stat");
      this[_tryToResolveArena](pointer, state);
    }
    sweep(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 146, 12, "t(!state.isOp");
      if (dart.test(state.isHeld)) {
        state.hasPendingSweep = true;
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Delaying sweep", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 149, 14, "t(_debugLogDiagnostic(pointer, 'Delaying sweep', stat");
        return;
      }
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Sweeping", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 152, 12, "t(_debugLogDiagnostic(pointer, 'Sweeping', stat");
      this[_arenas][$remove](pointer);
      if (dart.test(state.members[$isNotEmpty])) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 156, 14, "t(_debugLogDiagnostic(pointer, 'Winner: ${state.members.first}");
        state.members[$first].acceptGesture(pointer);
        for (let i = 1; i < dart.notNull(state.members[$length]); i = i + 1)
          state.members[$_get](i).rejectGesture(pointer);
      }
    }
    hold(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = true;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Holding", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 181, 12, "t(_debugLogDiagnostic(pointer, 'Holding', stat");
    }
    release(pointer) {
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      state.isHeld = false;
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Releasing", state))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 198, 12, "t(_debugLogDiagnostic(pointer, 'Releasing', stat");
      if (dart.test(state.hasPendingSweep)) this.sweep(pointer);
    }
    [_resolve](pointer, member, disposition) {
      let t0;
      let state = this[_arenas][$_get](pointer);
      if (state == null) return;
      if (!dart.test(this[_debugLogDiagnostic](pointer, (dart.equals(disposition, arena.GestureDisposition.accepted) ? "Accepting" : "Rejecting") + ": " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 209, 12, "t(_debugLogDiagnostic(pointer,\r\n        '${disposition == GestureDisposition.accepted ? \"Accepting\" : \"Rejecting\"}: $member");
      if (!dart.test(state.members[$contains](member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 211, 12, "t(state.members.contains(membe");
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        state.members[$remove](member);
        member.rejectGesture(pointer);
        if (!dart.test(state.isOpen)) this[_tryToResolveArena](pointer, state);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 217, 14, "t(disposition == GestureDisposition.accept");
        if (dart.test(state.isOpen)) {
          t0 = state;
          t0.eagerWinner == null ? t0.eagerWinner = member : null;
        } else {
          if (!dart.test(this[_debugLogDiagnostic](pointer, "Self-declared winner: " + dart.str(member)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 221, 16, "t(_debugLogDiagnostic(pointer, 'Self-declared winner: $member");
          this[_resolveInFavorOf](pointer, state, member);
        }
      }
    }
    [_tryToResolveArena](pointer, state) {
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 228, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 229, 12, "t(!state.isOp");
      if (state.members[$length] === 1) {
        async.scheduleMicrotask(dart.fn(() => this[_resolveByDefault](pointer, state), VoidTovoid()));
      } else if (dart.test(state.members[$isEmpty])) {
        this[_arenas][$remove](pointer);
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Arena empty."))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 234, 14, "t(_debugLogDiagnostic(pointer, 'Arena empty.");
      } else if (state.eagerWinner != null) {
        if (!dart.test(this[_debugLogDiagnostic](pointer, "Eager winner: " + dart.str(state.eagerWinner)))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 237, 11, "  _debugLogDiagnostic(pointer, 'Eager winner: ${state.eagerWinner}");
        this[_resolveInFavorOf](pointer, state, state.eagerWinner);
      }
    }
    [_resolveByDefault](pointer, state) {
      if (!dart.test(this[_arenas][$containsKey](pointer))) return;
      if (!dart.equals(this[_arenas][$_get](pointer), state)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 244, 12, "t(_arenas[pointer] == sta");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 245, 12, "t(!state.isOp");
      let members = state.members;
      if (!(members[$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 247, 12, "t(members.length ==");
      this[_arenas][$remove](pointer);
      if (!dart.test(this[_debugLogDiagnostic](pointer, "Default winner: " + dart.str(state.members[$first])))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 250, 9, "  _debugLogDiagnostic(pointer, 'Default winner: ${state.members.first}");
      state.members[$first].acceptGesture(pointer);
    }
    [_resolveInFavorOf](pointer, state, member) {
      if (!dart.equals(state, this[_arenas][$_get](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 256, 12, "t(state == _arenas[pointe");
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 257, 12, "t(state != nu");
      if (!(state.eagerWinner == null || dart.equals(state.eagerWinner, member))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 258, 12, "t(state.eagerWinner == null || state.eagerWinner == memb");
      if (!!dart.test(state.isOpen)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 259, 12, "t(!state.isOp");
      this[_arenas][$remove](pointer);
      for (let rejectedMember of state.members) {
        if (!dart.equals(rejectedMember, member)) rejectedMember.rejectGesture(pointer);
      }
      member.acceptGesture(pointer);
    }
    [_debugLogDiagnostic](pointer, message, state) {
      if (state === void 0) state = null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPrintGestureArenaDiagnostics)) {
          let count = state != null ? state.members[$length] : null;
          let s = count !== 1 ? "s" : "";
          print.debugPrint("Gesture arena " + dart.toString(pointer)[$padRight](4) + " ❙ " + dart.str(message) + (count != null ? " with " + dart.str(count) + " member" + s + "." : ""));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/arena.dart", 268, 12, "t(() {\r\n      if (debugPrintGestureArenaDiagnostics) {\r\n        final int count = state != null ? state.members.length : null;\r\n        final String s = count != 1 ? 's' : '';\r\n        debugPrint(\r\n            'Gesture arena ${pointer.toString().padRight(4)} ❙ $message${count != null ? \" with $count member$s.\" : \"\"}');\r\n      }\r\n      return true;\r\n   ");
      return true;
    }
  };
  (arena.GestureArenaManager.new = function() {
    this[_arenas] = new (IdentityMapOfint$_GestureArena()).new();
    ;
  }).prototype = arena.GestureArenaManager.prototype;
  dart.addTypeTests(arena.GestureArenaManager);
  dart.setMethodSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getMethods(arena.GestureArenaManager.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    close: dart.fnType(dart.void, [core.int]),
    sweep: dart.fnType(dart.void, [core.int]),
    hold: dart.fnType(dart.void, [core.int]),
    release: dart.fnType(dart.void, [core.int]),
    [_resolve]: dart.fnType(dart.void, [core.int, arena.GestureArenaMember, arena.GestureDisposition]),
    [_tryToResolveArena]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveByDefault]: dart.fnType(dart.void, [core.int, arena._GestureArena]),
    [_resolveInFavorOf]: dart.fnType(dart.void, [core.int, arena._GestureArena, arena.GestureArenaMember]),
    [_debugLogDiagnostic]: dart.fnType(core.bool, [core.int, core.String], [arena._GestureArena])
  }));
  dart.setLibraryUri(arena.GestureArenaManager, "package:flutter_web/src/gestures/arena.dart");
  dart.setFieldSignature(arena.GestureArenaManager, () => ({
    __proto__: dart.getFields(arena.GestureArenaManager.__proto__),
    [_arenas]: dart.finalFieldType(core.Map$(core.int, arena._GestureArena))
  }));
  debug.debugAssertAllGesturesVarsUnset = function debugAssertAllGesturesVarsUnset(reason) {
    if (!dart.test(dart.fn(() => {
      if (dart.test(debug.debugPrintHitTestResults) || dart.test(debug.debugPrintGestureArenaDiagnostics) || dart.test(debug.debugPrintRecognizerCallbacksTrace)) dart.throw(assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/debug.dart", 61, 10, "() {\r\n    if (debugPrintHitTestResults ||\r\n        debugPrintGestureArenaDiagnostics ||\r\n        debugPrintRecognizerCallbacksTrace) throw FlutterError(reason);\r\n    return true;\r\n  }()");
    return true;
  };
  dart.defineLazy(debug, {
    /*debug.debugPrintHitTestResults*/get debugPrintHitTestResults() {
      return false;
    },
    set debugPrintHitTestResults(_) {},
    /*debug.debugPrintMouseHoverEvents*/get debugPrintMouseHoverEvents() {
      return false;
    },
    set debugPrintMouseHoverEvents(_) {},
    /*debug.debugPrintGestureArenaDiagnostics*/get debugPrintGestureArenaDiagnostics() {
      return false;
    },
    set debugPrintGestureArenaDiagnostics(_) {},
    /*debug.debugPrintRecognizerCallbacksTrace*/get debugPrintRecognizerCallbacksTrace() {
      return false;
    },
    set debugPrintRecognizerCallbacksTrace(_) {}
  });
  dart.copyProperties(util, {
    get assertionsEnabled() {
      let k = false;
      if (!(k = true)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/util.dart", 22, 10, "k = true");
      return k;
    }
  });
  dart.defineLazy(util, {
    /*util.debugIsInTest*/get debugIsInTest() {
      return false;
    },
    set debugIsInTest(_) {}
  });
  const _routeMap = dart.privateName(pointer_router, "_routeMap");
  const _globalRoutes = dart.privateName(pointer_router, "_globalRoutes");
  const _dispatch = dart.privateName(pointer_router, "_dispatch");
  pointer_router.PointerRouter = class PointerRouter extends core.Object {
    addRoute(pointer, route) {
      let routes = this[_routeMap][$putIfAbsent](pointer, dart.fn(() => new (_HashSetOfPointerEventTovoid()).new(), VoidToLinkedHashSetOfPointerEventTovoid()));
      if (!!dart.test(routes.contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 30, 12, "!routes.contains(route)");
      routes.add(route);
    }
    removeRoute(pointer, route) {
      if (!dart.test(this[_routeMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 42, 12, "_routeMap.containsKey(pointer)");
      let routes = this[_routeMap][$_get](pointer);
      if (!dart.test(routes.contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 44, 12, "routes.contains(route)");
      routes.remove(route);
      if (dart.test(routes[$isEmpty])) this[_routeMap][$remove](pointer);
    }
    addGlobalRoute(route) {
      if (!!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 56, 12, "!_globalRoutes.contains(route)");
      this[_globalRoutes].add(route);
    }
    removeGlobalRoute(route) {
      if (!dart.test(this[_globalRoutes].contains(route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_router.dart", 68, 12, "_globalRoutes.contains(route)");
      this[_globalRoutes].remove(route);
    }
    [_dispatch](event, route) {
      try {
        route(event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new pointer_router.FlutterErrorDetailsForPointerRouter.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while routing a pointer event"), router: this, route: route, event: event, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
      }
    }
    route(event) {
      let routes = this[_routeMap][$_get](event.pointer);
      let globalRoutes = ListOfPointerEventTovoid().from(this[_globalRoutes]);
      if (routes != null) {
        for (let route of ListOfPointerEventTovoid().from(routes)) {
          if (dart.test(routes.contains(route))) this[_dispatch](event, route);
        }
      }
      for (let route of globalRoutes) {
        if (dart.test(this[_globalRoutes].contains(route))) this[_dispatch](event, route);
      }
    }
  };
  (pointer_router.PointerRouter.new = function() {
    this[_routeMap] = new (IdentityMapOfint$LinkedHashSetOfPointerEventTovoid()).new();
    this[_globalRoutes] = new (_HashSetOfPointerEventTovoid()).new();
    ;
  }).prototype = pointer_router.PointerRouter.prototype;
  dart.addTypeTests(pointer_router.PointerRouter);
  dart.setMethodSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getMethods(pointer_router.PointerRouter.__proto__),
    addRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    removeRoute: dart.fnType(dart.void, [core.int, dart.fnType(dart.void, [events.PointerEvent])]),
    addGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    removeGlobalRoute: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    [_dispatch]: dart.fnType(dart.void, [events.PointerEvent, dart.fnType(dart.void, [events.PointerEvent])]),
    route: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setLibraryUri(pointer_router.PointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.PointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.PointerRouter.__proto__),
    [_routeMap]: dart.finalFieldType(core.Map$(core.int, collection.LinkedHashSet$(dart.fnType(dart.void, [events.PointerEvent])))),
    [_globalRoutes]: dart.finalFieldType(collection.LinkedHashSet$(dart.fnType(dart.void, [events.PointerEvent])))
  }));
  pointer_router.FlutterErrorDetailsForPointerRouter = class FlutterErrorDetailsForPointerRouter extends assertions.FlutterErrorDetails {
    get router() {
      return this[router$];
    }
    set router(value) {
      super.router = value;
    }
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    get event() {
      return this[event$];
    }
    set event(value) {
      super.event = value;
    }
  };
  (pointer_router.FlutterErrorDetailsForPointerRouter.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let router = opts && 'router' in opts ? opts.router : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[router$] = router;
    this[route$] = route;
    this[event$] = event;
    pointer_router.FlutterErrorDetailsForPointerRouter.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = pointer_router.FlutterErrorDetailsForPointerRouter.prototype;
  dart.addTypeTests(pointer_router.FlutterErrorDetailsForPointerRouter);
  const router$ = Symbol("FlutterErrorDetailsForPointerRouter.router");
  const route$ = Symbol("FlutterErrorDetailsForPointerRouter.route");
  const event$ = Symbol("FlutterErrorDetailsForPointerRouter.event");
  dart.setLibraryUri(pointer_router.FlutterErrorDetailsForPointerRouter, "package:flutter_web/src/gestures/pointer_router.dart");
  dart.setFieldSignature(pointer_router.FlutterErrorDetailsForPointerRouter, () => ({
    __proto__: dart.getFields(pointer_router.FlutterErrorDetailsForPointerRouter.__proto__),
    router: dart.finalFieldType(pointer_router.PointerRouter),
    route: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEvent])),
    event: dart.finalFieldType(events.PointerEvent)
  }));
  const _duration = dart.privateName(core, "_duration");
  let C3;
  const _name = dart.privateName(ui, "_name");
  let C4;
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C5;
  events.PointerEvent = class PointerEvent extends diagnostics.Diagnosticable {
    get timeStamp() {
      return this[timeStamp$];
    }
    set timeStamp(value) {
      super.timeStamp = value;
    }
    get pointer() {
      return this[pointer$];
    }
    set pointer(value) {
      super.pointer = value;
    }
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get device() {
      return this[device$];
    }
    set device(value) {
      super.device = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    get delta() {
      return this[delta$];
    }
    set delta(value) {
      super.delta = value;
    }
    get buttons() {
      return this[buttons$];
    }
    set buttons(value) {
      super.buttons = value;
    }
    get down() {
      return this[down$];
    }
    set down(value) {
      super.down = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get pressureMin() {
      return this[pressureMin$];
    }
    set pressureMin(value) {
      super.pressureMin = value;
    }
    get pressureMax() {
      return this[pressureMax$];
    }
    set pressureMax(value) {
      super.pressureMax = value;
    }
    get distance() {
      return this[distance$];
    }
    set distance(value) {
      super.distance = value;
    }
    get distanceMax() {
      return this[distanceMax$];
    }
    set distanceMax(value) {
      super.distanceMax = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get radiusMajor() {
      return this[radiusMajor$];
    }
    set radiusMajor(value) {
      super.radiusMajor = value;
    }
    get radiusMinor() {
      return this[radiusMinor$];
    }
    set radiusMinor(value) {
      super.radiusMinor = value;
    }
    get radiusMin() {
      return this[radiusMin$];
    }
    set radiusMin(value) {
      super.radiusMin = value;
    }
    get radiusMax() {
      return this[radiusMax$];
    }
    set radiusMax(value) {
      super.radiusMax = value;
    }
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get tilt() {
      return this[tilt$];
    }
    set tilt(value) {
      super.tilt = value;
    }
    get platformData() {
      return this[platformData$];
    }
    set platformData(value) {
      super.platformData = value;
    }
    get synthesized() {
      return this[synthesized$];
    }
    set synthesized(value) {
      super.synthesized = value;
    }
    get distanceMin() {
      return 0.0;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("position", this.position));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("delta", this.delta, {defaultValue: ui.Offset.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfDuration()).new("timeStamp", this.timeStamp, {defaultValue: core.Duration.zero, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("pointer", this.pointer, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (EnumPropertyOfPointerDeviceKind()).new("kind", this.kind, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("device", this.device, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("buttons", this.buttons, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("down", this.down, {level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressure", this.pressure, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMin", this.pressureMin, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("pressureMax", this.pressureMax, {defaultValue: 1.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distance", this.distance, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMin", this.distanceMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("distanceMax", this.distanceMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("size", this.size, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMajor", this.radiusMajor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMinor", this.radiusMinor, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMin", this.radiusMin, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("radiusMax", this.radiusMax, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("orientation", this.orientation, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.DoubleProperty.new("tilt", this.tilt, {defaultValue: 0.0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.IntProperty.new("platformData", this.platformData, {defaultValue: 0, level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("obscured", {value: this.obscured, ifTrue: "obscured", level: diagnostics.DiagnosticLevel.debug}));
      properties.add(new diagnostics.FlagProperty.new("synthesized", {value: this.synthesized, ifTrue: "synthesized", level: diagnostics.DiagnosticLevel.debug}));
    }
    toStringFull() {
      return this.toString({minLevel: diagnostics.DiagnosticLevel.fine});
    }
  };
  (events.PointerEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let down = opts && 'down' in opts ? opts.down : false;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    this[timeStamp$] = timeStamp;
    this[pointer$] = pointer;
    this[kind$] = kind;
    this[device$] = device;
    this[position$] = position;
    this[delta$] = delta;
    this[buttons$] = buttons;
    this[down$] = down;
    this[obscured$] = obscured;
    this[pressure$] = pressure;
    this[pressureMin$] = pressureMin;
    this[pressureMax$] = pressureMax;
    this[distance$] = distance;
    this[distanceMax$] = distanceMax;
    this[size$] = size;
    this[radiusMajor$] = radiusMajor;
    this[radiusMinor$] = radiusMinor;
    this[radiusMin$] = radiusMin;
    this[radiusMax$] = radiusMax;
    this[orientation$] = orientation;
    this[tilt$] = tilt;
    this[platformData$] = platformData;
    this[synthesized$] = synthesized;
    events.PointerEvent.__proto__.new.call(this);
    ;
  }).prototype = events.PointerEvent.prototype;
  dart.addTypeTests(events.PointerEvent);
  const timeStamp$ = Symbol("PointerEvent.timeStamp");
  const pointer$ = Symbol("PointerEvent.pointer");
  const kind$ = Symbol("PointerEvent.kind");
  const device$ = Symbol("PointerEvent.device");
  const position$ = Symbol("PointerEvent.position");
  const delta$ = Symbol("PointerEvent.delta");
  const buttons$ = Symbol("PointerEvent.buttons");
  const down$ = Symbol("PointerEvent.down");
  const obscured$ = Symbol("PointerEvent.obscured");
  const pressure$ = Symbol("PointerEvent.pressure");
  const pressureMin$ = Symbol("PointerEvent.pressureMin");
  const pressureMax$ = Symbol("PointerEvent.pressureMax");
  const distance$ = Symbol("PointerEvent.distance");
  const distanceMax$ = Symbol("PointerEvent.distanceMax");
  const size$ = Symbol("PointerEvent.size");
  const radiusMajor$ = Symbol("PointerEvent.radiusMajor");
  const radiusMinor$ = Symbol("PointerEvent.radiusMinor");
  const radiusMin$ = Symbol("PointerEvent.radiusMin");
  const radiusMax$ = Symbol("PointerEvent.radiusMax");
  const orientation$ = Symbol("PointerEvent.orientation");
  const tilt$ = Symbol("PointerEvent.tilt");
  const platformData$ = Symbol("PointerEvent.platformData");
  const synthesized$ = Symbol("PointerEvent.synthesized");
  dart.setMethodSignature(events.PointerEvent, () => ({
    __proto__: dart.getMethods(events.PointerEvent.__proto__),
    toStringFull: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(events.PointerEvent, () => ({
    __proto__: dart.getGetters(events.PointerEvent.__proto__),
    distanceMin: core.double
  }));
  dart.setLibraryUri(events.PointerEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerEvent, () => ({
    __proto__: dart.getFields(events.PointerEvent.__proto__),
    timeStamp: dart.finalFieldType(core.Duration),
    pointer: dart.finalFieldType(core.int),
    kind: dart.finalFieldType(ui.PointerDeviceKind),
    device: dart.finalFieldType(core.int),
    position: dart.finalFieldType(ui.Offset),
    delta: dart.finalFieldType(ui.Offset),
    buttons: dart.finalFieldType(core.int),
    down: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    pressure: dart.finalFieldType(core.double),
    pressureMin: dart.finalFieldType(core.double),
    pressureMax: dart.finalFieldType(core.double),
    distance: dart.finalFieldType(core.double),
    distanceMax: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    radiusMajor: dart.finalFieldType(core.double),
    radiusMinor: dart.finalFieldType(core.double),
    radiusMin: dart.finalFieldType(core.double),
    radiusMax: dart.finalFieldType(core.double),
    orientation: dart.finalFieldType(core.double),
    tilt: dart.finalFieldType(core.double),
    platformData: dart.finalFieldType(core.int),
    synthesized: dart.finalFieldType(core.bool)
  }));
  events.PointerAddedEvent = class PointerAddedEvent extends events.PointerEvent {};
  (events.PointerAddedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    events.PointerAddedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = events.PointerAddedEvent.prototype;
  dart.addTypeTests(events.PointerAddedEvent);
  dart.setLibraryUri(events.PointerAddedEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerRemovedEvent = class PointerRemovedEvent extends events.PointerEvent {};
  (events.PointerRemovedEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    events.PointerRemovedEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distanceMax: distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
    ;
  }).prototype = events.PointerRemovedEvent.prototype;
  dart.addTypeTests(events.PointerRemovedEvent);
  dart.setLibraryUri(events.PointerRemovedEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerHoverEvent = class PointerHoverEvent extends events.PointerEvent {};
  (events.PointerHoverEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    events.PointerHoverEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = events.PointerHoverEvent.prototype;
  dart.addTypeTests(events.PointerHoverEvent);
  dart.setLibraryUri(events.PointerHoverEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerEnterEvent = class PointerEnterEvent extends events.PointerEvent {};
  (events.PointerEnterEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    events.PointerEnterEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromHoverEvent = function(event) {
    events.PointerEnterEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerEnterEvent.prototype;
  (events.PointerEnterEvent.fromMouseEvent = function(event) {
    let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11, t1$12, t1$13, t1$14, t1$15, t1$16;
    events.PointerEnterEvent.new.call(this, {timeStamp: (t1 = event, t1 == null ? null : t1.timeStamp), kind: (t1$ = event, t1$ == null ? null : t1$.kind), device: (t1$0 = event, t1$0 == null ? null : t1$0.device), position: (t1$1 = event, t1$1 == null ? null : t1$1.position), delta: (t1$2 = event, t1$2 == null ? null : t1$2.delta), buttons: (t1$3 = event, t1$3 == null ? null : t1$3.buttons), obscured: (t1$4 = event, t1$4 == null ? null : t1$4.obscured), pressureMin: (t1$5 = event, t1$5 == null ? null : t1$5.pressureMin), pressureMax: (t1$6 = event, t1$6 == null ? null : t1$6.pressureMax), distance: (t1$7 = event, t1$7 == null ? null : t1$7.distance), distanceMax: (t1$8 = event, t1$8 == null ? null : t1$8.distanceMax), size: (t1$9 = event, t1$9 == null ? null : t1$9.size), radiusMajor: (t1$10 = event, t1$10 == null ? null : t1$10.radiusMajor), radiusMinor: (t1$11 = event, t1$11 == null ? null : t1$11.radiusMinor), radiusMin: (t1$12 = event, t1$12 == null ? null : t1$12.radiusMin), radiusMax: (t1$13 = event, t1$13 == null ? null : t1$13.radiusMax), orientation: (t1$14 = event, t1$14 == null ? null : t1$14.orientation), tilt: (t1$15 = event, t1$15 == null ? null : t1$15.tilt), synthesized: (t1$16 = event, t1$16 == null ? null : t1$16.synthesized)});
  }).prototype = events.PointerEnterEvent.prototype;
  dart.addTypeTests(events.PointerEnterEvent);
  dart.setLibraryUri(events.PointerEnterEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerExitEvent = class PointerExitEvent extends events.PointerEvent {};
  (events.PointerExitEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    events.PointerExitEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, synthesized: synthesized});
    ;
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromHoverEvent = function(event) {
    events.PointerExitEvent.fromMouseEvent.call(this, event);
  }).prototype = events.PointerExitEvent.prototype;
  (events.PointerExitEvent.fromMouseEvent = function(event) {
    let t1, t1$, t1$0, t1$1, t1$2, t1$3, t1$4, t1$5, t1$6, t1$7, t1$8, t1$9, t1$10, t1$11, t1$12, t1$13, t1$14, t1$15, t1$16;
    events.PointerExitEvent.new.call(this, {timeStamp: (t1 = event, t1 == null ? null : t1.timeStamp), kind: (t1$ = event, t1$ == null ? null : t1$.kind), device: (t1$0 = event, t1$0 == null ? null : t1$0.device), position: (t1$1 = event, t1$1 == null ? null : t1$1.position), delta: (t1$2 = event, t1$2 == null ? null : t1$2.delta), buttons: (t1$3 = event, t1$3 == null ? null : t1$3.buttons), obscured: (t1$4 = event, t1$4 == null ? null : t1$4.obscured), pressureMin: (t1$5 = event, t1$5 == null ? null : t1$5.pressureMin), pressureMax: (t1$6 = event, t1$6 == null ? null : t1$6.pressureMax), distance: (t1$7 = event, t1$7 == null ? null : t1$7.distance), distanceMax: (t1$8 = event, t1$8 == null ? null : t1$8.distanceMax), size: (t1$9 = event, t1$9 == null ? null : t1$9.size), radiusMajor: (t1$10 = event, t1$10 == null ? null : t1$10.radiusMajor), radiusMinor: (t1$11 = event, t1$11 == null ? null : t1$11.radiusMinor), radiusMin: (t1$12 = event, t1$12 == null ? null : t1$12.radiusMin), radiusMax: (t1$13 = event, t1$13 == null ? null : t1$13.radiusMax), orientation: (t1$14 = event, t1$14 == null ? null : t1$14.orientation), tilt: (t1$15 = event, t1$15 == null ? null : t1$15.tilt), synthesized: (t1$16 = event, t1$16 == null ? null : t1$16.synthesized)});
  }).prototype = events.PointerExitEvent.prototype;
  dart.addTypeTests(events.PointerExitEvent);
  dart.setLibraryUri(events.PointerExitEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerDownEvent = class PointerDownEvent extends events.PointerEvent {};
  (events.PointerDownEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    events.PointerDownEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = events.PointerDownEvent.prototype;
  dart.addTypeTests(events.PointerDownEvent);
  dart.setLibraryUri(events.PointerDownEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerMoveEvent = class PointerMoveEvent extends events.PointerEvent {};
  (events.PointerMoveEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 1;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 1;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    let platformData = opts && 'platformData' in opts ? opts.platformData : 0;
    let synthesized = opts && 'synthesized' in opts ? opts.synthesized : false;
    events.PointerMoveEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, delta: delta, buttons: buttons, down: true, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: 0.0, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt, platformData: platformData, synthesized: synthesized});
    ;
  }).prototype = events.PointerMoveEvent.prototype;
  dart.addTypeTests(events.PointerMoveEvent);
  dart.setLibraryUri(events.PointerMoveEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerUpEvent = class PointerUpEvent extends events.PointerEvent {};
  (events.PointerUpEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressure = opts && 'pressure' in opts ? opts.pressure : 0;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    events.PointerUpEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: pressure, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = events.PointerUpEvent.prototype;
  dart.addTypeTests(events.PointerUpEvent);
  dart.setLibraryUri(events.PointerUpEvent, "package:flutter_web/src/gestures/events.dart");
  let C6;
  events.PointerSignalEvent = class PointerSignalEvent extends events.PointerEvent {};
  (events.PointerSignalEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C6 || CT.C6;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    events.PointerSignalEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position});
    ;
  }).prototype = events.PointerSignalEvent.prototype;
  dart.addTypeTests(events.PointerSignalEvent);
  dart.setLibraryUri(events.PointerSignalEvent, "package:flutter_web/src/gestures/events.dart");
  events.PointerScrollEvent = class PointerScrollEvent extends events.PointerSignalEvent {
    get scrollDelta() {
      return this[scrollDelta$];
    }
    set scrollDelta(value) {
      super.scrollDelta = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfOffset()).new("scrollDelta", this.scrollDelta));
    }
  };
  (events.PointerScrollEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let kind = opts && 'kind' in opts ? opts.kind : C6 || CT.C6;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let scrollDelta = opts && 'scrollDelta' in opts ? opts.scrollDelta : C5 || CT.C5;
    this[scrollDelta$] = scrollDelta;
    if (!(timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 970, 16, "timeStamp != null");
    if (!(kind != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 971, 16, "kind != null");
    if (!(device != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 972, 16, "device != null");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 973, 16, "position != null");
    if (!(scrollDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/events.dart", 974, 16, "scrollDelta != null");
    events.PointerScrollEvent.__proto__.new.call(this, {timeStamp: timeStamp, kind: kind, device: device, position: position});
    ;
  }).prototype = events.PointerScrollEvent.prototype;
  dart.addTypeTests(events.PointerScrollEvent);
  const scrollDelta$ = Symbol("PointerScrollEvent.scrollDelta");
  dart.setLibraryUri(events.PointerScrollEvent, "package:flutter_web/src/gestures/events.dart");
  dart.setFieldSignature(events.PointerScrollEvent, () => ({
    __proto__: dart.getFields(events.PointerScrollEvent.__proto__),
    scrollDelta: dart.finalFieldType(ui.Offset)
  }));
  events.PointerCancelEvent = class PointerCancelEvent extends events.PointerEvent {};
  (events.PointerCancelEvent.new = function(opts) {
    let timeStamp = opts && 'timeStamp' in opts ? opts.timeStamp : C3 || CT.C3;
    let pointer = opts && 'pointer' in opts ? opts.pointer : 0;
    let kind = opts && 'kind' in opts ? opts.kind : C4 || CT.C4;
    let device = opts && 'device' in opts ? opts.device : 0;
    let position = opts && 'position' in opts ? opts.position : C5 || CT.C5;
    let buttons = opts && 'buttons' in opts ? opts.buttons : 0;
    let obscured = opts && 'obscured' in opts ? opts.obscured : false;
    let pressureMin = opts && 'pressureMin' in opts ? opts.pressureMin : 1;
    let pressureMax = opts && 'pressureMax' in opts ? opts.pressureMax : 1;
    let distance = opts && 'distance' in opts ? opts.distance : 0;
    let distanceMax = opts && 'distanceMax' in opts ? opts.distanceMax : 0;
    let size = opts && 'size' in opts ? opts.size : 0;
    let radiusMajor = opts && 'radiusMajor' in opts ? opts.radiusMajor : 0;
    let radiusMinor = opts && 'radiusMinor' in opts ? opts.radiusMinor : 0;
    let radiusMin = opts && 'radiusMin' in opts ? opts.radiusMin : 0;
    let radiusMax = opts && 'radiusMax' in opts ? opts.radiusMax : 0;
    let orientation = opts && 'orientation' in opts ? opts.orientation : 0;
    let tilt = opts && 'tilt' in opts ? opts.tilt : 0;
    events.PointerCancelEvent.__proto__.new.call(this, {timeStamp: timeStamp, pointer: pointer, kind: kind, device: device, position: position, buttons: buttons, down: false, obscured: obscured, pressure: 0.0, pressureMin: pressureMin, pressureMax: pressureMax, distance: distance, distanceMax: distanceMax, size: size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: orientation, tilt: tilt});
    ;
  }).prototype = events.PointerCancelEvent.prototype;
  dart.addTypeTests(events.PointerCancelEvent);
  dart.setLibraryUri(events.PointerCancelEvent, "package:flutter_web/src/gestures/events.dart");
  events.nthMouseButton = function nthMouseButton(number) {
    return ((1)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.nthStylusButton = function nthStylusButton(number) {
    return ((2)[$leftShift](dart.notNull(number) - 1) & -1) >>> 0;
  };
  events.smallestButton = function smallestButton(buttons) {
    return (dart.notNull(buttons) & -dart.notNull(buttons)) >>> 0;
  };
  events.isSingleButton = function isSingleButton(buttons) {
    return buttons !== 0 && events.smallestButton(buttons) == buttons;
  };
  dart.defineLazy(events, {
    /*events.kPrimaryButton*/get kPrimaryButton() {
      return 1;
    },
    /*events.kSecondaryButton*/get kSecondaryButton() {
      return 2;
    },
    /*events.kPrimaryMouseButton*/get kPrimaryMouseButton() {
      return 1;
    },
    /*events.kSecondaryMouseButton*/get kSecondaryMouseButton() {
      return 2;
    },
    /*events.kStylusContact*/get kStylusContact() {
      return 1;
    },
    /*events.kPrimaryStylusButton*/get kPrimaryStylusButton() {
      return 2;
    },
    /*events.kMiddleMouseButton*/get kMiddleMouseButton() {
      return 4;
    },
    /*events.kSecondaryStylusButton*/get kSecondaryStylusButton() {
      return 4;
    },
    /*events.kBackMouseButton*/get kBackMouseButton() {
      return 8;
    },
    /*events.kForwardMouseButton*/get kForwardMouseButton() {
      return 16;
    },
    /*events.kTouchContact*/get kTouchContact() {
      return 1;
    }
  });
  const _name$0 = dart.privateName(scale, "_name");
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  scale._ScaleState = class _ScaleState extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (scale._ScaleState.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = scale._ScaleState.prototype;
  dart.addTypeTests(scale._ScaleState);
  dart.setLibraryUri(scale._ScaleState, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale._ScaleState, () => ({
    __proto__: dart.getFields(scale._ScaleState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(scale._ScaleState, ['toString']);
  scale._ScaleState.ready = C7 || CT.C7;
  scale._ScaleState.possible = C8 || CT.C8;
  scale._ScaleState.accepted = C9 || CT.C9;
  scale._ScaleState.started = C10 || CT.C10;
  scale._ScaleState.values = C11 || CT.C11;
  scale.ScaleStartDetails = class ScaleStartDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    toString() {
      return "ScaleStartDetails(focalPoint: " + dart.str(this.focalPoint) + ")";
    }
  };
  (scale.ScaleStartDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C5 || CT.C5;
    this[focalPoint$] = focalPoint;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 38, 16, "focalPoint != null");
    ;
  }).prototype = scale.ScaleStartDetails.prototype;
  dart.addTypeTests(scale.ScaleStartDetails);
  const focalPoint$ = Symbol("ScaleStartDetails.focalPoint");
  dart.setLibraryUri(scale.ScaleStartDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleStartDetails, () => ({
    __proto__: dart.getFields(scale.ScaleStartDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(scale.ScaleStartDetails, ['toString']);
  scale.ScaleUpdateDetails = class ScaleUpdateDetails extends core.Object {
    get focalPoint() {
      return this[focalPoint$0];
    }
    set focalPoint(value) {
      super.focalPoint = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
    get horizontalScale() {
      return this[horizontalScale$];
    }
    set horizontalScale(value) {
      super.horizontalScale = value;
    }
    get verticalScale() {
      return this[verticalScale$];
    }
    set verticalScale(value) {
      super.verticalScale = value;
    }
    get rotation() {
      return this[rotation$];
    }
    set rotation(value) {
      super.rotation = value;
    }
    toString() {
      return "ScaleUpdateDetails(focalPoint: " + dart.str(this.focalPoint) + ", scale: " + dart.str(this.scale) + ", horizontalScale: " + dart.str(this.horizontalScale) + ", verticalScale: " + dart.str(this.verticalScale) + ", rotation: " + dart.str(this.rotation) + ")";
    }
  };
  (scale.ScaleUpdateDetails.new = function(opts) {
    let focalPoint = opts && 'focalPoint' in opts ? opts.focalPoint : C5 || CT.C5;
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let horizontalScale = opts && 'horizontalScale' in opts ? opts.horizontalScale : 1;
    let verticalScale = opts && 'verticalScale' in opts ? opts.verticalScale : 1;
    let rotation = opts && 'rotation' in opts ? opts.rotation : 0;
    this[focalPoint$0] = focalPoint;
    this[scale$] = scale;
    this[horizontalScale$] = horizontalScale;
    this[verticalScale$] = verticalScale;
    this[rotation$] = rotation;
    if (!(focalPoint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 61, 16, "focalPoint != null");
    if (!(scale != null && dart.notNull(scale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 62, 16, "scale != null && scale >= 0.0");
    if (!(horizontalScale != null && dart.notNull(horizontalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 63, 16, "horizontalScale != null && horizontalScale >= 0.0");
    if (!(verticalScale != null && dart.notNull(verticalScale) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 64, 16, "verticalScale != null && verticalScale >= 0.0");
    if (!(rotation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 65, 16, "rotation != null");
    ;
  }).prototype = scale.ScaleUpdateDetails.prototype;
  dart.addTypeTests(scale.ScaleUpdateDetails);
  const focalPoint$0 = Symbol("ScaleUpdateDetails.focalPoint");
  const scale$ = Symbol("ScaleUpdateDetails.scale");
  const horizontalScale$ = Symbol("ScaleUpdateDetails.horizontalScale");
  const verticalScale$ = Symbol("ScaleUpdateDetails.verticalScale");
  const rotation$ = Symbol("ScaleUpdateDetails.rotation");
  dart.setLibraryUri(scale.ScaleUpdateDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleUpdateDetails, () => ({
    __proto__: dart.getFields(scale.ScaleUpdateDetails.__proto__),
    focalPoint: dart.finalFieldType(ui.Offset),
    scale: dart.finalFieldType(core.double),
    horizontalScale: dart.finalFieldType(core.double),
    verticalScale: dart.finalFieldType(core.double),
    rotation: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(scale.ScaleUpdateDetails, ['toString']);
  let C12;
  scale.ScaleEndDetails = class ScaleEndDetails extends core.Object {
    get velocity() {
      return this[velocity$];
    }
    set velocity(value) {
      super.velocity = value;
    }
    toString() {
      return "ScaleEndDetails(velocity: " + dart.str(this.velocity) + ")";
    }
  };
  (scale.ScaleEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C12 || CT.C12;
    this[velocity$] = velocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 121, 61, "velocity != null");
    ;
  }).prototype = scale.ScaleEndDetails.prototype;
  dart.addTypeTests(scale.ScaleEndDetails);
  const velocity$ = Symbol("ScaleEndDetails.velocity");
  dart.setLibraryUri(scale.ScaleEndDetails, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleEndDetails, () => ({
    __proto__: dart.getFields(scale.ScaleEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity)
  }));
  dart.defineExtensionMethods(scale.ScaleEndDetails, ['toString']);
  scale._LineBetweenPointers = class _LineBetweenPointers extends core.Object {};
  (scale._LineBetweenPointers.new = function(opts) {
    let pointerStartLocation = opts && 'pointerStartLocation' in opts ? opts.pointerStartLocation : C5 || CT.C5;
    let pointerStartId = opts && 'pointerStartId' in opts ? opts.pointerStartId : 0;
    let pointerEndLocation = opts && 'pointerEndLocation' in opts ? opts.pointerEndLocation : C5 || CT.C5;
    let pointerEndId = opts && 'pointerEndId' in opts ? opts.pointerEndId : 1;
    this.pointerStartLocation = pointerStartLocation;
    this.pointerStartId = pointerStartId;
    this.pointerEndLocation = pointerEndLocation;
    this.pointerEndId = pointerEndId;
    if (!(pointerStartLocation != null && pointerEndLocation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 160, 16, "pointerStartLocation != null && pointerEndLocation != null");
    if (!(pointerStartId != null && pointerEndId != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 161, 16, "pointerStartId != null && pointerEndId != null");
    if (!(pointerStartId != pointerEndId)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 162, 16, "pointerStartId != pointerEndId");
    ;
  }).prototype = scale._LineBetweenPointers.prototype;
  dart.addTypeTests(scale._LineBetweenPointers);
  dart.setLibraryUri(scale._LineBetweenPointers, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale._LineBetweenPointers, () => ({
    __proto__: dart.getFields(scale._LineBetweenPointers.__proto__),
    pointerStartLocation: dart.finalFieldType(ui.Offset),
    pointerStartId: dart.finalFieldType(core.int),
    pointerEndLocation: dart.finalFieldType(ui.Offset),
    pointerEndId: dart.finalFieldType(core.int)
  }));
  const _state = dart.privateName(scale, "_state");
  const _initialFocalPoint = dart.privateName(scale, "_initialFocalPoint");
  const _currentFocalPoint = dart.privateName(scale, "_currentFocalPoint");
  const _initialSpan = dart.privateName(scale, "_initialSpan");
  const _currentSpan = dart.privateName(scale, "_currentSpan");
  const _initialHorizontalSpan = dart.privateName(scale, "_initialHorizontalSpan");
  const _currentHorizontalSpan = dart.privateName(scale, "_currentHorizontalSpan");
  const _initialVerticalSpan = dart.privateName(scale, "_initialVerticalSpan");
  const _currentVerticalSpan = dart.privateName(scale, "_currentVerticalSpan");
  const _initialLine = dart.privateName(scale, "_initialLine");
  const _currentLine = dart.privateName(scale, "_currentLine");
  const _pointerLocations = dart.privateName(scale, "_pointerLocations");
  const _pointerQueue = dart.privateName(scale, "_pointerQueue");
  const _velocityTrackers = dart.privateName(scale, "_velocityTrackers");
  const _scaleFactor = dart.privateName(scale, "_scaleFactor");
  const _horizontalScaleFactor = dart.privateName(scale, "_horizontalScaleFactor");
  const _verticalScaleFactor = dart.privateName(scale, "_verticalScaleFactor");
  const _computeRotationFactor = dart.privateName(scale, "_computeRotationFactor");
  const _updateLines = dart.privateName(scale, "_updateLines");
  const _update = dart.privateName(scale, "_update");
  const _reconfigure = dart.privateName(scale, "_reconfigure");
  const _advanceStateMachine = dart.privateName(scale, "_advanceStateMachine");
  const _dispatchOnStartCallbackIfNeeded = dart.privateName(scale, "_dispatchOnStartCallbackIfNeeded");
  const _entries = dart.privateName(recognizer, "_entries");
  const _trackedPointers = dart.privateName(recognizer, "_trackedPointers");
  const _team = dart.privateName(recognizer, "_team");
  const _addPointerToArena = dart.privateName(recognizer, "_addPointerToArena");
  const _pointerToKind = dart.privateName(recognizer, "_pointerToKind");
  const _kindFilter = dart.privateName(recognizer, "_kindFilter");
  const GestureArenaMember_DiagnosticableTreeMixin$ = class GestureArenaMember_DiagnosticableTreeMixin extends arena.GestureArenaMember {};
  (GestureArenaMember_DiagnosticableTreeMixin$.new = function() {
  }).prototype = GestureArenaMember_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(GestureArenaMember_DiagnosticableTreeMixin$, diagnostics.DiagnosticableTreeMixin);
  recognizer.GestureRecognizer = class GestureRecognizer extends GestureArenaMember_DiagnosticableTreeMixin$ {
    get debugOwner() {
      return this[debugOwner$];
    }
    set debugOwner(value) {
      super.debugOwner = value;
    }
    addPointer(event) {
      this[_pointerToKind][$_set](event.pointer, event.kind);
      if (dart.test(this.isPointerAllowed(event))) {
        this.addAllowedPointer(event);
      } else {
        this.handleNonAllowedPointer(event);
      }
    }
    addAllowedPointer(event) {
    }
    handleNonAllowedPointer(event) {
    }
    isPointerAllowed(event) {
      return this[_kindFilter] == null || dart.equals(this[_kindFilter], event.kind);
    }
    getKindForPointer(pointer) {
      if (!dart.test(this[_pointerToKind][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 142, 12, "_pointerToKind.containsKey(pointer)");
      return this[_pointerToKind][$_get](pointer);
    }
    dispose() {
    }
    invokeCallback(T, name, callback, opts) {
      let debugReport = opts && 'debugReport' in opts ? opts.debugReport : null;
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 171, 12, "callback != null");
      let result = null;
      try {
        if (!dart.test(dart.fn(() => {
          let t1;
          if (dart.test(debug.debugPrintRecognizerCallbacksTrace)) {
            let report = debugReport != null ? debugReport() : null;
            let prefix = dart.test(debug.debugPrintGestureArenaDiagnostics) ? " "[$times](19) + "❙ " : "";
            print.debugPrint(prefix + dart.str(this) + " calling " + dart.str(name) + " callback." + (dart.equals((t1 = report, t1 == null ? null : t1[$isNotEmpty]), true) ? " " + dart.str(report) : ""));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 174, 14, "() {\r\n        if (debugPrintRecognizerCallbacksTrace) {\r\n          final String report = debugReport != null ? debugReport() : null;\r\n          // The 19 in the line below is the width of the prefix used by\r\n          // _debugLogDiagnostic in arena.dart.\r\n          final String prefix =\r\n              debugPrintGestureArenaDiagnostics ? ' ' * 19 + '❙ ' : '';\r\n          debugPrint(\r\n              '$prefix$this calling $name callback.${report?.isNotEmpty == true ? \" $report\" : \"\"}');\r\n        }\r\n        return true;\r\n      }");
        result = callback();
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture", context: new assertions.ErrorDescription.new("while handling a gesture"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsNode()).new((function*() {
            yield new diagnostics.StringProperty.new("Handler", name);
            yield new (DiagnosticsPropertyOfGestureRecognizer()).new("Recognizer", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }).bind(this)), VoidToIterableOfDiagnosticsNode())}));
      }
      return result;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfObject()).new("debugOwner", this.debugOwner, {defaultValue: null}));
    }
  };
  (recognizer.GestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_pointerToKind] = new (IdentityMapOfint$PointerDeviceKind()).new();
    this[debugOwner$] = debugOwner;
    this[_kindFilter] = kind;
    ;
  }).prototype = recognizer.GestureRecognizer.prototype;
  dart.addTypeTests(recognizer.GestureRecognizer);
  const debugOwner$ = Symbol("GestureRecognizer.debugOwner");
  dart.setMethodSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.GestureRecognizer.__proto__),
    addPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    handleNonAllowedPointer: dart.fnType(dart.void, [events.PointerDownEvent]),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerDownEvent]),
    getKindForPointer: dart.fnType(ui.PointerDeviceKind, [core.int]),
    dispose: dart.fnType(dart.void, []),
    invokeCallback: dart.gFnType(T => [T, [core.String, dart.fnType(T, [])], {debugReport: dart.fnType(core.String, [])}])
  }));
  dart.setLibraryUri(recognizer.GestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizer.__proto__),
    debugOwner: dart.finalFieldType(core.Object),
    [_kindFilter]: dart.finalFieldType(ui.PointerDeviceKind),
    [_pointerToKind]: dart.finalFieldType(core.Map$(core.int, ui.PointerDeviceKind))
  }));
  recognizer.OneSequenceGestureRecognizer = class OneSequenceGestureRecognizer extends recognizer.GestureRecognizer {
    handleNonAllowedPointer(event) {
      this.resolve(arena.GestureDisposition.rejected);
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
    }
    resolve(disposition) {
      let localEntries = ListOfGestureArenaEntry().from(this[_entries][$values]);
      this[_entries][$clear]();
      for (let entry of localEntries)
        entry.resolve(disposition);
    }
    dispose() {
      this.resolve(arena.GestureDisposition.rejected);
      for (let pointer of this[_trackedPointers])
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].clear();
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 269, 12, "t(_entries.isEmp");
      super.dispose();
    }
    get team() {
      return this[_team];
    }
    set team(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 288, 12, "t(value != nu");
      if (!dart.test(this[_entries][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 289, 12, "t(_entries.isEmp");
      if (!dart.test(this[_trackedPointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 290, 12, "t(_trackedPointers.isEmp");
      if (!(this[_team] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 291, 12, "t(_team == nu");
      this[_team] = value;
    }
    [_addPointerToArena](pointer) {
      if (this[_team] != null) return this[_team].add(pointer, this);
      return binding$0.GestureBinding.instance.gestureArena.add(pointer, this);
    }
    startTrackingPointer(pointer) {
      binding$0.GestureBinding.instance.pointerRouter.addRoute(pointer, dart.bind(this, 'handleEvent'));
      this[_trackedPointers].add(pointer);
      if (!!dart.test(this[_entries][$containsValue](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 309, 12, "t(!_entries.containsValue(pointe");
      this[_entries][$_set](pointer, this[_addPointerToArena](pointer));
    }
    stopTrackingPointer(pointer) {
      if (dart.test(this[_trackedPointers].contains(pointer))) {
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, 'handleEvent'));
        this[_trackedPointers].remove(pointer);
        if (dart.test(this[_trackedPointers][$isEmpty])) this.didStopTrackingLastPointer(pointer);
      }
    }
    stopTrackingIfPointerNoLongerDown(event) {
      if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) this.stopTrackingPointer(event.pointer);
    }
  };
  (recognizer.OneSequenceGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[_entries] = new (IdentityMapOfint$GestureArenaEntry()).new();
    this[_trackedPointers] = new (_IdentityHashSetOfint()).new();
    this[_team] = null;
    recognizer.OneSequenceGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.OneSequenceGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.OneSequenceGestureRecognizer);
  dart.setMethodSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.OneSequenceGestureRecognizer.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    [_addPointerToArena]: dart.fnType(arena.GestureArenaEntry, [core.int]),
    startTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingPointer: dart.fnType(dart.void, [core.int]),
    stopTrackingIfPointerNoLongerDown: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getGetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setSetterSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getSetters(recognizer.OneSequenceGestureRecognizer.__proto__),
    team: team.GestureArenaTeam
  }));
  dart.setLibraryUri(recognizer.OneSequenceGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.OneSequenceGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.OneSequenceGestureRecognizer.__proto__),
    [_entries]: dart.finalFieldType(core.Map$(core.int, arena.GestureArenaEntry)),
    [_trackedPointers]: dart.finalFieldType(core.Set$(core.int)),
    [_team]: dart.fieldType(team.GestureArenaTeam)
  }));
  scale.ScaleGestureRecognizer = class ScaleGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart];
    }
    set onStart(value) {
      this[onStart] = value;
    }
    get onUpdate() {
      return this[onUpdate];
    }
    set onUpdate(value) {
      this[onUpdate] = value;
    }
    get onEnd() {
      return this[onEnd];
    }
    set onEnd(value) {
      this[onEnd] = value;
    }
    get [_scaleFactor]() {
      return dart.notNull(this[_initialSpan]) > 0.0 ? dart.notNull(this[_currentSpan]) / dart.notNull(this[_initialSpan]) : 1.0;
    }
    get [_horizontalScaleFactor]() {
      return dart.notNull(this[_initialHorizontalSpan]) > 0.0 ? dart.notNull(this[_currentHorizontalSpan]) / dart.notNull(this[_initialHorizontalSpan]) : 1.0;
    }
    get [_verticalScaleFactor]() {
      return dart.notNull(this[_initialVerticalSpan]) > 0.0 ? dart.notNull(this[_currentVerticalSpan]) / dart.notNull(this[_initialVerticalSpan]) : 1.0;
    }
    [_computeRotationFactor]() {
      if (this[_initialLine] == null || this[_currentLine] == null) {
        return 0.0;
      }
      let fx = this[_initialLine].pointerStartLocation.dx;
      let fy = this[_initialLine].pointerStartLocation.dy;
      let sx = this[_initialLine].pointerEndLocation.dx;
      let sy = this[_initialLine].pointerEndLocation.dy;
      let nfx = this[_currentLine].pointerStartLocation.dx;
      let nfy = this[_currentLine].pointerStartLocation.dy;
      let nsx = this[_currentLine].pointerEndLocation.dx;
      let nsy = this[_currentLine].pointerEndLocation.dy;
      let angle1 = math.atan2(dart.notNull(fy) - dart.notNull(sy), dart.notNull(fx) - dart.notNull(sx));
      let angle2 = math.atan2(dart.notNull(nfy) - dart.notNull(nsy), dart.notNull(nfx) - dart.notNull(nsx));
      return angle2 - angle1;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state], scale._ScaleState.ready)) {
        this[_state] = scale._ScaleState.possible;
        this[_initialSpan] = 0.0;
        this[_currentSpan] = 0.0;
        this[_initialHorizontalSpan] = 0.0;
        this[_currentHorizontalSpan] = 0.0;
        this[_initialVerticalSpan] = 0.0;
        this[_currentVerticalSpan] = 0.0;
        this[_pointerLocations] = new (IdentityMapOfint$Offset()).new();
        this[_pointerQueue] = JSArrayOfint().of([]);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state], scale._ScaleState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 266, 12, "_state != _ScaleState.ready");
      let didChangeConfiguration = false;
      let shouldStartIfAccepted = false;
      if (events.PointerMoveEvent.is(event)) {
        let tracker = this[_velocityTrackers][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 271, 14, "tracker != null");
        if (!dart.test(event.synthesized)) tracker.addPosition(event.timeStamp, event.position);
        this[_pointerLocations][$_set](event.pointer, event.position);
        shouldStartIfAccepted = true;
      } else if (events.PointerDownEvent.is(event)) {
        this[_pointerLocations][$_set](event.pointer, event.position);
        this[_pointerQueue][$add](event.pointer);
        didChangeConfiguration = true;
        shouldStartIfAccepted = true;
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        this[_pointerLocations][$remove](event.pointer);
        this[_pointerQueue][$remove](event.pointer);
        didChangeConfiguration = true;
      }
      this[_updateLines]();
      this[_update]();
      if (!didChangeConfiguration || dart.test(this[_reconfigure](event.pointer))) this[_advanceStateMachine](shouldStartIfAccepted);
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    [_update]() {
      let count = this[_pointerLocations][$keys][$length];
      let focalPoint = ui.Offset.zero;
      for (let pointer of this[_pointerLocations][$keys])
        focalPoint = focalPoint['+'](this[_pointerLocations][$_get](pointer));
      this[_currentFocalPoint] = dart.notNull(count) > 0 ? focalPoint['/'](count[$toDouble]()) : ui.Offset.zero;
      let totalDeviation = 0.0;
      let totalHorizontalDeviation = 0.0;
      let totalVerticalDeviation = 0.0;
      for (let pointer of this[_pointerLocations][$keys]) {
        totalDeviation = totalDeviation + dart.notNull(this[_currentFocalPoint]['-'](this[_pointerLocations][$_get](pointer)).distance);
        totalHorizontalDeviation = totalHorizontalDeviation + (dart.notNull(this[_currentFocalPoint].dx) - dart.notNull(this[_pointerLocations][$_get](pointer).dx))[$abs]();
        totalVerticalDeviation = totalVerticalDeviation + (dart.notNull(this[_currentFocalPoint].dy) - dart.notNull(this[_pointerLocations][$_get](pointer).dy))[$abs]();
      }
      this[_currentSpan] = dart.notNull(count) > 0 ? totalDeviation / dart.notNull(count) : 0.0;
      this[_currentHorizontalSpan] = dart.notNull(count) > 0 ? totalHorizontalDeviation / dart.notNull(count) : 0.0;
      this[_currentVerticalSpan] = dart.notNull(count) > 0 ? totalVerticalDeviation / dart.notNull(count) : 0.0;
    }
    [_updateLines]() {
      let count = this[_pointerLocations][$keys][$length];
      if (!(dart.notNull(this[_pointerQueue][$length]) >= dart.notNull(count))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 328, 12, "_pointerQueue.length >= count");
      if (dart.notNull(count) < 2) {
        this[_initialLine] = this[_currentLine];
      } else if (this[_initialLine] != null && this[_initialLine].pointerStartId == this[_pointerQueue][$_get](0) && this[_initialLine].pointerEndId == this[_pointerQueue][$_get](1)) {
        this[_currentLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
      } else {
        this[_initialLine] = new scale._LineBetweenPointers.new({pointerStartId: this[_pointerQueue][$_get](0), pointerStartLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](0)), pointerEndId: this[_pointerQueue][$_get](1), pointerEndLocation: this[_pointerLocations][$_get](this[_pointerQueue][$_get](1))});
        this[_currentLine] = null;
      }
    }
    [_reconfigure](pointer) {
      this[_initialFocalPoint] = this[_currentFocalPoint];
      this[_initialSpan] = this[_currentSpan];
      this[_initialLine] = this[_currentLine];
      this[_initialHorizontalSpan] = this[_currentHorizontalSpan];
      this[_initialVerticalSpan] = this[_currentVerticalSpan];
      if (dart.equals(this[_state], scale._ScaleState.started)) {
        if (this.onEnd != null) {
          let tracker = this[_velocityTrackers][$_get](pointer);
          if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 364, 16, "tracker != null");
          let velocity = tracker.getVelocity();
          if (dart.test(scale._isFlingGesture(velocity))) {
            let pixelsPerSecond = velocity.pixelsPerSecond;
            if (dart.notNull(pixelsPerSecond.distanceSquared) > 8000 * 8000) velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: pixelsPerSecond['/'](pixelsPerSecond.distance)['*'](8000)});
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity})), VoidTovoid()));
          } else {
            this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new scale.ScaleEndDetails.new({velocity: velocity_tracker.Velocity.zero})), VoidTovoid()));
          }
        }
        this[_state] = scale._ScaleState.accepted;
        return false;
      }
      return true;
    }
    [_advanceStateMachine](shouldStartIfAccepted) {
      if (dart.equals(this[_state], scale._ScaleState.ready)) this[_state] = scale._ScaleState.possible;
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        let spanDelta = (dart.notNull(this[_currentSpan]) - dart.notNull(this[_initialSpan]))[$abs]();
        let focalPointDelta = this[_currentFocalPoint]['-'](this[_initialFocalPoint]).distance;
        if (spanDelta > 18 || dart.notNull(focalPointDelta) > 36) this.resolve(arena.GestureDisposition.accepted);
      } else if (dart.notNull(this[_state].index) >= dart.notNull(scale._ScaleState.accepted.index)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (dart.equals(this[_state], scale._ScaleState.accepted) && dart.test(shouldStartIfAccepted)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
      if (dart.equals(this[_state], scale._ScaleState.started) && this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => {
        this.onUpdate(new scale.ScaleUpdateDetails.new({scale: this[_scaleFactor], horizontalScale: this[_horizontalScaleFactor], verticalScale: this[_verticalScaleFactor], focalPoint: this[_currentFocalPoint], rotation: this[_computeRotationFactor]()}));
      }, VoidToNull()));
    }
    [_dispatchOnStartCallbackIfNeeded]() {
      if (!dart.equals(this[_state], scale._ScaleState.started)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 418, 12, "_state == _ScaleState.started");
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new scale.ScaleStartDetails.new({focalPoint: this[_currentFocalPoint]})), VoidTovoid()));
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state], scale._ScaleState.possible)) {
        this[_state] = scale._ScaleState.started;
        this[_dispatchOnStartCallbackIfNeeded]();
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      switch (this[_state]) {
        case C8 || CT.C8:
        {
          this.resolve(arena.GestureDisposition.rejected);
          break;
        }
        case C7 || CT.C7:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 444, 16, "false");
          break;
        }
        case C9 || CT.C9:
        {
          break;
        }
        case C10 || CT.C10:
        {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 449, 16, "false");
          break;
        }
      }
      this[_state] = scale._ScaleState.ready;
    }
    dispose() {
      this[_velocityTrackers][$clear]();
      super.dispose();
    }
    get debugDescription() {
      return "scale";
    }
  };
  (scale.ScaleGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart] = null;
    this[onUpdate] = null;
    this[onEnd] = null;
    this[_state] = scale._ScaleState.ready;
    this[_initialFocalPoint] = null;
    this[_currentFocalPoint] = null;
    this[_initialSpan] = null;
    this[_currentSpan] = null;
    this[_initialHorizontalSpan] = null;
    this[_currentHorizontalSpan] = null;
    this[_initialVerticalSpan] = null;
    this[_currentVerticalSpan] = null;
    this[_initialLine] = null;
    this[_currentLine] = null;
    this[_pointerLocations] = null;
    this[_pointerQueue] = null;
    this[_velocityTrackers] = new (IdentityMapOfint$VelocityTracker()).new();
    scale.ScaleGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = scale.ScaleGestureRecognizer.prototype;
  dart.addTypeTests(scale.ScaleGestureRecognizer);
  const onStart = Symbol("ScaleGestureRecognizer.onStart");
  const onUpdate = Symbol("ScaleGestureRecognizer.onUpdate");
  const onEnd = Symbol("ScaleGestureRecognizer.onEnd");
  dart.setMethodSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getMethods(scale.ScaleGestureRecognizer.__proto__),
    [_computeRotationFactor]: dart.fnType(core.double, []),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    [_update]: dart.fnType(dart.void, []),
    [_updateLines]: dart.fnType(dart.void, []),
    [_reconfigure]: dart.fnType(core.bool, [core.int]),
    [_advanceStateMachine]: dart.fnType(dart.void, [core.bool]),
    [_dispatchOnStartCallbackIfNeeded]: dart.fnType(dart.void, []),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getGetters(scale.ScaleGestureRecognizer.__proto__),
    [_scaleFactor]: core.double,
    [_horizontalScaleFactor]: core.double,
    [_verticalScaleFactor]: core.double,
    debugDescription: core.String
  }));
  dart.setLibraryUri(scale.ScaleGestureRecognizer, "package:flutter_web/src/gestures/scale.dart");
  dart.setFieldSignature(scale.ScaleGestureRecognizer, () => ({
    __proto__: dart.getFields(scale.ScaleGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [scale.ScaleStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [scale.ScaleUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [scale.ScaleEndDetails])),
    [_state]: dart.fieldType(scale._ScaleState),
    [_initialFocalPoint]: dart.fieldType(ui.Offset),
    [_currentFocalPoint]: dart.fieldType(ui.Offset),
    [_initialSpan]: dart.fieldType(core.double),
    [_currentSpan]: dart.fieldType(core.double),
    [_initialHorizontalSpan]: dart.fieldType(core.double),
    [_currentHorizontalSpan]: dart.fieldType(core.double),
    [_initialVerticalSpan]: dart.fieldType(core.double),
    [_currentVerticalSpan]: dart.fieldType(core.double),
    [_initialLine]: dart.fieldType(scale._LineBetweenPointers),
    [_currentLine]: dart.fieldType(scale._LineBetweenPointers),
    [_pointerLocations]: dart.fieldType(core.Map$(core.int, ui.Offset)),
    [_pointerQueue]: dart.fieldType(core.List$(core.int)),
    [_velocityTrackers]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  scale._isFlingGesture = function _isFlingGesture(velocity) {
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/scale.dart", 142, 10, "velocity != null");
    let speedSquared = velocity.pixelsPerSecond.distanceSquared;
    return dart.notNull(speedSquared) > 50 * 50;
  };
  velocity_tracker.Velocity = class Velocity extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    _negate() {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond._negate()});
    }
    ['-'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['-'](other.pixelsPerSecond)});
    }
    ['+'](other) {
      return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['+'](other.pixelsPerSecond)});
    }
    clampMagnitude(minValue, maxValue) {
      if (!(minValue != null && dart.notNull(minValue) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 53, 12, "minValue != null && minValue >= 0.0");
      if (!(maxValue != null && dart.notNull(maxValue) >= 0.0 && dart.notNull(maxValue) >= dart.notNull(minValue))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 54, 12, "maxValue != null && maxValue >= 0.0 && maxValue >= minValue");
      let valueSquared = this.pixelsPerSecond.distanceSquared;
      if (dart.notNull(valueSquared) > dart.notNull(maxValue) * dart.notNull(maxValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](maxValue)});
      if (dart.notNull(valueSquared) < dart.notNull(minValue) * dart.notNull(minValue)) return new velocity_tracker.Velocity.new({pixelsPerSecond: this.pixelsPerSecond['/'](this.pixelsPerSecond.distance)['*'](minValue)});
      return this;
    }
    _equals(other) {
      if (other == null) return false;
      if (!velocity_tracker.Velocity.is(other)) return false;
      let typedOther = velocity_tracker.Velocity._check(other);
      return dart.equals(this.pixelsPerSecond, typedOther.pixelsPerSecond);
    }
    get hashCode() {
      return dart.hashCode(this.pixelsPerSecond);
    }
    toString() {
      return "Velocity(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.Velocity.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    this[pixelsPerSecond$] = pixelsPerSecond;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 21, 15, "pixelsPerSecond != null");
    ;
  }).prototype = velocity_tracker.Velocity.prototype;
  dart.addTypeTests(velocity_tracker.Velocity);
  const pixelsPerSecond$ = Symbol("Velocity.pixelsPerSecond");
  dart.setMethodSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getMethods(velocity_tracker.Velocity.__proto__),
    _negate: dart.fnType(velocity_tracker.Velocity, []),
    '-': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    '+': dart.fnType(velocity_tracker.Velocity, [velocity_tracker.Velocity]),
    clampMagnitude: dart.fnType(velocity_tracker.Velocity, [core.double, core.double])
  }));
  dart.setLibraryUri(velocity_tracker.Velocity, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.Velocity, () => ({
    __proto__: dart.getFields(velocity_tracker.Velocity.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.Velocity, ['_equals', 'toString']);
  dart.defineExtensionAccessors(velocity_tracker.Velocity, ['hashCode']);
  dart.defineLazy(velocity_tracker.Velocity, {
    /*velocity_tracker.Velocity.zero*/get zero() {
      return C12 || CT.C12;
    }
  });
  velocity_tracker.VelocityEstimate = class VelocityEstimate extends core.Object {
    get pixelsPerSecond() {
      return this[pixelsPerSecond$0];
    }
    set pixelsPerSecond(value) {
      super.pixelsPerSecond = value;
    }
    get confidence() {
      return this[confidence$];
    }
    set confidence(value) {
      super.confidence = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    toString() {
      return "VelocityEstimate(" + this.pixelsPerSecond.dx[$toStringAsFixed](1) + ", " + this.pixelsPerSecond.dy[$toStringAsFixed](1) + "; offset: " + dart.str(this.offset) + ", duration: " + dart.str(this.duration) + ", confidence: " + this.confidence[$toStringAsFixed](1) + ")";
    }
  };
  (velocity_tracker.VelocityEstimate.new = function(opts) {
    let pixelsPerSecond = opts && 'pixelsPerSecond' in opts ? opts.pixelsPerSecond : null;
    let confidence = opts && 'confidence' in opts ? opts.confidence : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    this[pixelsPerSecond$0] = pixelsPerSecond;
    this[confidence$] = confidence;
    this[duration$] = duration;
    this[offset$] = offset;
    if (!(pixelsPerSecond != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 104, 16, "pixelsPerSecond != null");
    if (!(confidence != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 105, 16, "confidence != null");
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 106, 16, "duration != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 107, 16, "offset != null");
    ;
  }).prototype = velocity_tracker.VelocityEstimate.prototype;
  dart.addTypeTests(velocity_tracker.VelocityEstimate);
  const pixelsPerSecond$0 = Symbol("VelocityEstimate.pixelsPerSecond");
  const confidence$ = Symbol("VelocityEstimate.confidence");
  const duration$ = Symbol("VelocityEstimate.duration");
  const offset$ = Symbol("VelocityEstimate.offset");
  dart.setLibraryUri(velocity_tracker.VelocityEstimate, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityEstimate, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityEstimate.__proto__),
    pixelsPerSecond: dart.finalFieldType(ui.Offset),
    confidence: dart.finalFieldType(core.double),
    duration: dart.finalFieldType(core.Duration),
    offset: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker.VelocityEstimate, ['toString']);
  velocity_tracker._PointAtTime = class _PointAtTime extends core.Object {
    toString() {
      return "_PointAtTime(" + dart.str(this.point) + " at " + dart.str(this.time) + ")";
    }
  };
  (velocity_tracker._PointAtTime.new = function(point, time) {
    this.point = point;
    this.time = time;
    if (!(point != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 133, 16, "point != null");
    if (!(time != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/velocity_tracker.dart", 134, 16, "time != null");
    ;
  }).prototype = velocity_tracker._PointAtTime.prototype;
  dart.addTypeTests(velocity_tracker._PointAtTime);
  dart.setLibraryUri(velocity_tracker._PointAtTime, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker._PointAtTime, () => ({
    __proto__: dart.getFields(velocity_tracker._PointAtTime.__proto__),
    time: dart.finalFieldType(core.Duration),
    point: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(velocity_tracker._PointAtTime, ['toString']);
  const _samples = dart.privateName(velocity_tracker, "_samples");
  const _index = dart.privateName(velocity_tracker, "_index");
  velocity_tracker.VelocityTracker = class VelocityTracker extends core.Object {
    addPosition(time, position) {
      this[_index] = dart.notNull(this[_index]) + 1;
      if (this[_index] === 20) this[_index] = 0;
      this[_samples][$_set](this[_index], new velocity_tracker._PointAtTime.new(position, time));
    }
    getVelocityEstimate() {
      let x = JSArrayOfdouble().of([]);
      let y = JSArrayOfdouble().of([]);
      let w = JSArrayOfdouble().of([]);
      let time = JSArrayOfdouble().of([]);
      let sampleCount = 0;
      let index = this[_index];
      let newestSample = this[_samples][$_get](index);
      if (newestSample == null) return null;
      let previousSample = newestSample;
      let oldestSample = newestSample;
      do {
        let sample = this[_samples][$_get](index);
        if (sample == null) break;
        let age = newestSample.time['-'](sample.time).inMilliseconds[$toDouble]();
        let delta = sample.time['-'](previousSample.time).inMilliseconds[$abs]()[$toDouble]();
        previousSample = sample;
        if (age > 100 || delta > 40) break;
        oldestSample = sample;
        let position = sample.point;
        x[$add](position.dx);
        y[$add](position.dy);
        w[$add](1.0);
        time[$add](-age);
        index = dart.notNull(index === 0 ? 20 : index) - 1;
        sampleCount = sampleCount + 1;
      } while (sampleCount < 20);
      if (sampleCount >= 3) {
        let xSolver = new lsq_solver.LeastSquaresSolver.new(time, x, w);
        let xFit = xSolver.solve(2);
        if (xFit != null) {
          let ySolver = new lsq_solver.LeastSquaresSolver.new(time, y, w);
          let yFit = ySolver.solve(2);
          if (yFit != null) {
            return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: new ui.Offset.new(dart.notNull(xFit.coefficients[$_get](1)) * 1000, dart.notNull(yFit.coefficients[$_get](1)) * 1000), confidence: dart.notNull(xFit.confidence) * dart.notNull(yFit.confidence), duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
          }
        }
      }
      return new velocity_tracker.VelocityEstimate.new({pixelsPerSecond: ui.Offset.zero, confidence: 1.0, duration: newestSample.time['-'](oldestSample.time), offset: newestSample.point['-'](oldestSample.point)});
    }
    getVelocity() {
      let estimate = this.getVelocityEstimate();
      if (estimate == null || dart.equals(estimate.pixelsPerSecond, ui.Offset.zero)) return velocity_tracker.Velocity.zero;
      return new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond});
    }
  };
  (velocity_tracker.VelocityTracker.new = function() {
    this[_samples] = ListOf_PointAtTime().new(20);
    this[_index] = 0;
    ;
  }).prototype = velocity_tracker.VelocityTracker.prototype;
  dart.addTypeTests(velocity_tracker.VelocityTracker);
  dart.setMethodSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getMethods(velocity_tracker.VelocityTracker.__proto__),
    addPosition: dart.fnType(dart.void, [core.Duration, ui.Offset]),
    getVelocityEstimate: dart.fnType(velocity_tracker.VelocityEstimate, []),
    getVelocity: dart.fnType(velocity_tracker.Velocity, [])
  }));
  dart.setLibraryUri(velocity_tracker.VelocityTracker, "package:flutter_web/src/gestures/velocity_tracker.dart");
  dart.setFieldSignature(velocity_tracker.VelocityTracker, () => ({
    __proto__: dart.getFields(velocity_tracker.VelocityTracker.__proto__),
    [_samples]: dart.finalFieldType(core.List$(velocity_tracker._PointAtTime)),
    [_index]: dart.fieldType(core.int)
  }));
  dart.defineLazy(velocity_tracker.VelocityTracker, {
    /*velocity_tracker.VelocityTracker._assumePointerMoveStoppedMilliseconds*/get _assumePointerMoveStoppedMilliseconds() {
      return 40;
    },
    /*velocity_tracker.VelocityTracker._historySize*/get _historySize() {
      return 20;
    },
    /*velocity_tracker.VelocityTracker._horizonMilliseconds*/get _horizonMilliseconds() {
      return 100;
    },
    /*velocity_tracker.VelocityTracker._minSampleSize*/get _minSampleSize() {
      return 3;
    }
  });
  const _offset = dart.privateName(lsq_solver, "_offset");
  const _length = dart.privateName(lsq_solver, "_length");
  const _elements = dart.privateName(lsq_solver, "_elements");
  lsq_solver._Vector = class _Vector extends core.Object {
    _get(i) {
      return this[_elements][$_get](dart.notNull(i) + dart.notNull(this[_offset]));
    }
    _set(i, value$) {
      let value = value$;
      this[_elements][$_set](dart.notNull(i) + dart.notNull(this[_offset]), value);
      return value$;
    }
    ['*'](a) {
      let result = 0.0;
      for (let i = 0; i < dart.notNull(this[_length]); i = i + 1)
        result = result + dart.notNull(this._get(i)) * dart.notNull(a._get(i));
      return result;
    }
    norm() {
      return math.sqrt(this['*'](this));
    }
  };
  (lsq_solver._Vector.new = function(size) {
    this[_offset] = 0;
    this[_length] = size;
    this[_elements] = _native_typed_data.NativeFloat64List.new(size);
    ;
  }).prototype = lsq_solver._Vector.prototype;
  (lsq_solver._Vector.fromVOL = function(values, offset, length) {
    this[_offset] = offset;
    this[_length] = length;
    this[_elements] = values;
    ;
  }).prototype = lsq_solver._Vector.prototype;
  dart.addTypeTests(lsq_solver._Vector);
  dart.setMethodSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getMethods(lsq_solver._Vector.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double]),
    '*': dart.fnType(core.double, [lsq_solver._Vector]),
    norm: dart.fnType(core.double, [])
  }));
  dart.setLibraryUri(lsq_solver._Vector, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Vector, () => ({
    __proto__: dart.getFields(lsq_solver._Vector.__proto__),
    [_offset]: dart.finalFieldType(core.int),
    [_length]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  const _columns = dart.privateName(lsq_solver, "_columns");
  lsq_solver._Matrix = class _Matrix extends core.Object {
    get(row, col) {
      return this[_elements][$_get](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col));
    }
    set(row, col, value) {
      this[_elements][$_set](dart.notNull(row) * dart.notNull(this[_columns]) + dart.notNull(col), value);
    }
    getRow(row) {
      return new lsq_solver._Vector.fromVOL(this[_elements], dart.notNull(row) * dart.notNull(this[_columns]), this[_columns]);
    }
  };
  (lsq_solver._Matrix.new = function(rows, cols) {
    this[_columns] = cols;
    this[_elements] = _native_typed_data.NativeFloat64List.new(dart.notNull(rows) * dart.notNull(cols));
    ;
  }).prototype = lsq_solver._Matrix.prototype;
  dart.addTypeTests(lsq_solver._Matrix);
  dart.setMethodSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getMethods(lsq_solver._Matrix.__proto__),
    get: dart.fnType(core.double, [core.int, core.int]),
    set: dart.fnType(dart.void, [core.int, core.int, core.double]),
    getRow: dart.fnType(lsq_solver._Vector, [core.int])
  }));
  dart.setLibraryUri(lsq_solver._Matrix, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver._Matrix, () => ({
    __proto__: dart.getFields(lsq_solver._Matrix.__proto__),
    [_columns]: dart.finalFieldType(core.int),
    [_elements]: dart.finalFieldType(core.List$(core.double))
  }));
  lsq_solver.PolynomialFit = class PolynomialFit extends core.Object {
    get coefficients() {
      return this[coefficients];
    }
    set coefficients(value) {
      super.coefficients = value;
    }
    get confidence() {
      return this[confidence];
    }
    set confidence(value) {
      this[confidence] = value;
    }
  };
  (lsq_solver.PolynomialFit.new = function(degree) {
    this[confidence] = null;
    this[coefficients] = _native_typed_data.NativeFloat64List.new(dart.notNull(degree) + 1);
    ;
  }).prototype = lsq_solver.PolynomialFit.prototype;
  dart.addTypeTests(lsq_solver.PolynomialFit);
  const coefficients = Symbol("PolynomialFit.coefficients");
  const confidence = Symbol("PolynomialFit.confidence");
  dart.setLibraryUri(lsq_solver.PolynomialFit, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.PolynomialFit, () => ({
    __proto__: dart.getFields(lsq_solver.PolynomialFit.__proto__),
    coefficients: dart.finalFieldType(core.List$(core.double)),
    confidence: dart.fieldType(core.double)
  }));
  lsq_solver.LeastSquaresSolver = class LeastSquaresSolver extends core.Object {
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
    get w() {
      return this[w$];
    }
    set w(value) {
      super.w = value;
    }
    solve(degree) {
      let t3, t2, t3$, t2$;
      if (dart.notNull(degree) > dart.notNull(this.x[$length])) return null;
      let result = new lsq_solver.PolynomialFit.new(degree);
      let m = this.x[$length];
      let n = dart.notNull(degree) + 1;
      let a = new lsq_solver._Matrix.new(n, m);
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        a.set(0, h, this.w[$_get](h));
        for (let i = 1; i < n; i = i + 1)
          a.set(i, h, dart.notNull(a.get(i - 1, h)) * dart.notNull(this.x[$_get](h)));
      }
      let q = new lsq_solver._Matrix.new(n, m);
      let r = new lsq_solver._Matrix.new(n, n);
      for (let j = 0; j < n; j = j + 1) {
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, a.get(j, h));
        for (let i = 0; i < j; i = i + 1) {
          let dot = q.getRow(j)['*'](q.getRow(i));
          for (let h = 0; h < dart.notNull(m); h = h + 1)
            q.set(j, h, dart.notNull(q.get(j, h)) - dart.notNull(dot) * dart.notNull(q.get(i, h)));
        }
        let norm = q.getRow(j).norm();
        if (dart.notNull(norm) < 1e-10) {
          return null;
        }
        let inverseNorm = 1.0 / dart.notNull(norm);
        for (let h = 0; h < dart.notNull(m); h = h + 1)
          q.set(j, h, dart.notNull(q.get(j, h)) * inverseNorm);
        for (let i = 0; i < n; i = i + 1)
          r.set(j, i, i < j ? 0.0 : q.getRow(j)['*'](a.getRow(i)));
      }
      let wy = new lsq_solver._Vector.new(m);
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        wy._set(h, dart.notNull(this.y[$_get](h)) * dart.notNull(this.w[$_get](h)));
      for (let i = n - 1; i >= 0; i = i - 1) {
        result.coefficients[$_set](i, q.getRow(i)['*'](wy));
        for (let j = n - 1; j > i; j = j - 1) {
          t2 = result.coefficients;
          t3 = i;
          t2[$_set](t3, dart.notNull(t2[$_get](t3)) - dart.notNull(r.get(i, j)) * dart.notNull(result.coefficients[$_get](j)));
        }
        t2$ = result.coefficients;
        t3$ = i;
        t2$[$_set](t3$, dart.notNull(t2$[$_get](t3$)) / dart.notNull(r.get(i, i)));
      }
      let yMean = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1)
        yMean = yMean + dart.notNull(this.y[$_get](h));
      yMean = yMean / dart.notNull(m);
      let sumSquaredError = 0.0;
      let sumSquaredTotal = 0.0;
      for (let h = 0; h < dart.notNull(m); h = h + 1) {
        let term = 1.0;
        let err = dart.notNull(this.y[$_get](h)) - dart.notNull(result.coefficients[$_get](0));
        for (let i = 1; i < n; i = i + 1) {
          term = term * dart.notNull(this.x[$_get](h));
          err = err - term * dart.notNull(result.coefficients[$_get](i));
        }
        sumSquaredError = sumSquaredError + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * err * err;
        let v = dart.notNull(this.y[$_get](h)) - yMean;
        sumSquaredTotal = sumSquaredTotal + dart.notNull(this.w[$_get](h)) * dart.notNull(this.w[$_get](h)) * v * v;
      }
      result.confidence = sumSquaredTotal <= 1e-10 ? 1.0 : 1.0 - sumSquaredError / sumSquaredTotal;
      return result;
    }
  };
  (lsq_solver.LeastSquaresSolver.new = function(x, y, w) {
    this[x$] = x;
    this[y$] = y;
    this[w$] = w;
    if (!(x[$length] == y[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/lsq_solver.dart", 86, 16, "x.length == y.length");
    if (!(y[$length] == w[$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/lsq_solver.dart", 87, 16, "y.length == w.length");
    ;
  }).prototype = lsq_solver.LeastSquaresSolver.prototype;
  dart.addTypeTests(lsq_solver.LeastSquaresSolver);
  const x$ = Symbol("LeastSquaresSolver.x");
  const y$ = Symbol("LeastSquaresSolver.y");
  const w$ = Symbol("LeastSquaresSolver.w");
  dart.setMethodSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getMethods(lsq_solver.LeastSquaresSolver.__proto__),
    solve: dart.fnType(lsq_solver.PolynomialFit, [core.int])
  }));
  dart.setLibraryUri(lsq_solver.LeastSquaresSolver, "package:flutter_web/src/gestures/lsq_solver.dart");
  dart.setFieldSignature(lsq_solver.LeastSquaresSolver, () => ({
    __proto__: dart.getFields(lsq_solver.LeastSquaresSolver.__proto__),
    x: dart.finalFieldType(core.List$(core.double)),
    y: dart.finalFieldType(core.List$(core.double)),
    w: dart.finalFieldType(core.List$(core.double))
  }));
  const _name$1 = dart.privateName(recognizer, "_name");
  let C13;
  let C14;
  let C15;
  recognizer.DragStartBehavior = class DragStartBehavior extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (recognizer.DragStartBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = recognizer.DragStartBehavior.prototype;
  dart.addTypeTests(recognizer.DragStartBehavior);
  dart.setLibraryUri(recognizer.DragStartBehavior, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.DragStartBehavior, () => ({
    __proto__: dart.getFields(recognizer.DragStartBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.DragStartBehavior, ['toString']);
  recognizer.DragStartBehavior.down = C13 || CT.C13;
  recognizer.DragStartBehavior.start = C14 || CT.C14;
  recognizer.DragStartBehavior.values = C15 || CT.C15;
  let C16;
  let C17;
  let C18;
  let C19;
  recognizer.GestureRecognizerState = class GestureRecognizerState extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (recognizer.GestureRecognizerState.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = recognizer.GestureRecognizerState.prototype;
  dart.addTypeTests(recognizer.GestureRecognizerState);
  dart.setLibraryUri(recognizer.GestureRecognizerState, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.GestureRecognizerState, () => ({
    __proto__: dart.getFields(recognizer.GestureRecognizerState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(recognizer.GestureRecognizerState, ['toString']);
  recognizer.GestureRecognizerState.ready = C16 || CT.C16;
  recognizer.GestureRecognizerState.possible = C17 || CT.C17;
  recognizer.GestureRecognizerState.defunct = C18 || CT.C18;
  recognizer.GestureRecognizerState.values = C19 || CT.C19;
  const _gestureAccepted = dart.privateName(recognizer, "_gestureAccepted");
  const _timer = dart.privateName(recognizer, "_timer");
  const _getDistance = dart.privateName(recognizer, "_getDistance");
  const _stopTimer = dart.privateName(recognizer, "_stopTimer");
  recognizer.PrimaryPointerGestureRecognizer = class PrimaryPointerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get deadline() {
      return this[deadline$];
    }
    set deadline(value) {
      super.deadline = value;
    }
    get preAcceptSlopTolerance() {
      return this[preAcceptSlopTolerance$];
    }
    set preAcceptSlopTolerance(value) {
      super.preAcceptSlopTolerance = value;
    }
    get postAcceptSlopTolerance() {
      return this[postAcceptSlopTolerance$];
    }
    set postAcceptSlopTolerance(value) {
      super.postAcceptSlopTolerance = value;
    }
    get state() {
      return this[state];
    }
    set state(value) {
      this[state] = value;
    }
    get primaryPointer() {
      return this[primaryPointer];
    }
    set primaryPointer(value) {
      this[primaryPointer] = value;
    }
    get initialPosition() {
      return this[initialPosition];
    }
    set initialPosition(value) {
      this[initialPosition] = value;
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      if (dart.equals(this.state, recognizer.GestureRecognizerState.ready)) {
        this.state = recognizer.GestureRecognizerState.possible;
        this.primaryPointer = event.pointer;
        this.initialPosition = event.position;
        if (this.deadline != null) this[_timer] = async.Timer.new(this.deadline, dart.fn(() => this.didExceedDeadlineWithEvent(event), VoidTovoid()));
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 441, 12, "t(state != GestureRecognizerState.rea");
      if (dart.equals(this.state, recognizer.GestureRecognizerState.possible) && event.pointer == this.primaryPointer) {
        let isPreAcceptSlopPastTolerance = !dart.test(this[_gestureAccepted]) && this.preAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.preAcceptSlopTolerance);
        let isPostAcceptSlopPastTolerance = dart.test(this[_gestureAccepted]) && this.postAcceptSlopTolerance != null && dart.notNull(this[_getDistance](event)) > dart.notNull(this.postAcceptSlopTolerance);
        if (events.PointerMoveEvent.is(event) && (isPreAcceptSlopPastTolerance || isPostAcceptSlopPastTolerance)) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else {
          this.handlePrimaryPointer(event);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    didExceedDeadline() {
      if (!(this.deadline == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 472, 12, "t(deadline == nu");
    }
    didExceedDeadlineWithEvent(event) {
      this.didExceedDeadline();
    }
    acceptGesture(pointer) {
      this[_gestureAccepted] = true;
    }
    rejectGesture(pointer) {
      if (pointer == this.primaryPointer && dart.equals(this.state, recognizer.GestureRecognizerState.possible)) {
        this[_stopTimer]();
        this.state = recognizer.GestureRecognizerState.defunct;
      }
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this.state, recognizer.GestureRecognizerState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 500, 12, "t(state != GestureRecognizerState.rea");
      this[_stopTimer]();
      this.state = recognizer.GestureRecognizerState.ready;
    }
    dispose() {
      this[_stopTimer]();
      super.dispose();
    }
    [_stopTimer]() {
      if (this[_timer] != null) {
        this[_timer].cancel();
        this[_timer] = null;
      }
    }
    [_getDistance](event) {
      let offset = event.position['-'](this.initialPosition);
      return offset.distance;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfGestureRecognizerState()).new("state", this.state));
    }
  };
  (recognizer.PrimaryPointerGestureRecognizer.new = function(opts) {
    let deadline = opts && 'deadline' in opts ? opts.deadline : null;
    let preAcceptSlopTolerance = opts && 'preAcceptSlopTolerance' in opts ? opts.preAcceptSlopTolerance : 18;
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : 18;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[state] = recognizer.GestureRecognizerState.ready;
    this[primaryPointer] = null;
    this[initialPosition] = null;
    this[_gestureAccepted] = false;
    this[_timer] = null;
    this[deadline$] = deadline;
    this[preAcceptSlopTolerance$] = preAcceptSlopTolerance;
    this[postAcceptSlopTolerance$] = postAcceptSlopTolerance;
    if (!(preAcceptSlopTolerance == null || dart.notNull(preAcceptSlopTolerance) >= 0)) dart.assertFailed("The preAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 379, 11, "  preAcceptSlopTolerance == null || preAcceptSlopTolerance >=");
    if (!(postAcceptSlopTolerance == null || dart.notNull(postAcceptSlopTolerance) >= 0)) dart.assertFailed("The postAcceptSlopTolerance must be positive or null", "org-dartlang-app:///packages/flutter_web/src/gestures/recognizer.dart", 383, 11, "  postAcceptSlopTolerance == null || postAcceptSlopTolerance >=");
    recognizer.PrimaryPointerGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = recognizer.PrimaryPointerGestureRecognizer.prototype;
  dart.addTypeTests(recognizer.PrimaryPointerGestureRecognizer);
  const deadline$ = Symbol("PrimaryPointerGestureRecognizer.deadline");
  const preAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.preAcceptSlopTolerance");
  const postAcceptSlopTolerance$ = Symbol("PrimaryPointerGestureRecognizer.postAcceptSlopTolerance");
  const state = Symbol("PrimaryPointerGestureRecognizer.state");
  const primaryPointer = Symbol("PrimaryPointerGestureRecognizer.primaryPointer");
  const initialPosition = Symbol("PrimaryPointerGestureRecognizer.initialPosition");
  dart.setMethodSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getMethods(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didExceedDeadline: dart.fnType(dart.void, []),
    didExceedDeadlineWithEvent: dart.fnType(dart.void, [events.PointerDownEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_stopTimer]: dart.fnType(dart.void, []),
    [_getDistance]: dart.fnType(core.double, [events.PointerEvent])
  }));
  dart.setLibraryUri(recognizer.PrimaryPointerGestureRecognizer, "package:flutter_web/src/gestures/recognizer.dart");
  dart.setFieldSignature(recognizer.PrimaryPointerGestureRecognizer, () => ({
    __proto__: dart.getFields(recognizer.PrimaryPointerGestureRecognizer.__proto__),
    deadline: dart.finalFieldType(core.Duration),
    preAcceptSlopTolerance: dart.finalFieldType(core.double),
    postAcceptSlopTolerance: dart.finalFieldType(core.double),
    state: dart.fieldType(recognizer.GestureRecognizerState),
    primaryPointer: dart.fieldType(core.int),
    initialPosition: dart.fieldType(ui.Offset),
    [_gestureAccepted]: dart.fieldType(core.bool),
    [_timer]: dart.fieldType(async.Timer)
  }));
  const _combiner$ = dart.privateName(team, "_combiner");
  const _member = dart.privateName(team, "_member");
  const _resolve$ = dart.privateName(team, "_resolve");
  let C20;
  const _arena = dart.privateName(team, "_arena");
  let C21;
  const _pointer$0 = dart.privateName(team, "_pointer");
  let C22;
  team._CombiningGestureArenaEntry = class _CombiningGestureArenaEntry extends core.Object {
    get [_member]() {
      return this[_member$0];
    }
    set [_member](value) {
      super[_member] = value;
    }
    resolve(disposition) {
      this[_combiner$][_resolve$](this[_member], disposition);
    }
    get [_member$]() {
      return arena.GestureArenaMember._check(this[$noSuchMethod](new core._Invocation.getter(C20 || CT.C20)));
    }
    get [_arena$]() {
      return arena.GestureArenaManager._check(this[$noSuchMethod](new core._Invocation.getter(C21 || CT.C21)));
    }
    get [_pointer$]() {
      return core.int._check(this[$noSuchMethod](new core._Invocation.getter(C22 || CT.C22)));
    }
  };
  (team._CombiningGestureArenaEntry.new = function(_combiner, _member) {
    this[_combiner$] = _combiner;
    this[_member$0] = _member;
    ;
  }).prototype = team._CombiningGestureArenaEntry.prototype;
  dart.addTypeTests(team._CombiningGestureArenaEntry);
  const _member$0 = Symbol("_CombiningGestureArenaEntry._member");
  team._CombiningGestureArenaEntry[dart.implements] = () => [arena.GestureArenaEntry];
  dart.setMethodSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaEntry.__proto__),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition])
  }));
  dart.setGetterSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getGetters(team._CombiningGestureArenaEntry.__proto__),
    [_member$]: arena.GestureArenaMember,
    [_arena$]: arena.GestureArenaManager,
    [_pointer$]: core.int
  }));
  dart.setLibraryUri(team._CombiningGestureArenaEntry, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaEntry, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaEntry.__proto__),
    [_combiner$]: dart.finalFieldType(team._CombiningGestureArenaMember),
    [_member]: dart.finalFieldType(arena.GestureArenaMember)
  }));
  const _members = dart.privateName(team, "_members");
  const _resolved = dart.privateName(team, "_resolved");
  const _winner = dart.privateName(team, "_winner");
  const _entry = dart.privateName(team, "_entry");
  const _owner$ = dart.privateName(team, "_owner");
  const _close = dart.privateName(team, "_close");
  const _combiners = dart.privateName(team, "_combiners");
  const _add = dart.privateName(team, "_add");
  team._CombiningGestureArenaMember = class _CombiningGestureArenaMember extends arena.GestureArenaMember {
    acceptGesture(pointer) {
      let t2;
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 33, 12, "_pointer == pointer");
      if (!(this[_winner] != null || dart.test(this[_members][$isNotEmpty]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 34, 12, "_winner != null || _members.isNotEmpty");
      this[_close]();
      this[_winner] == null ? this[_winner] = (t2 = this[_owner$].captain, t2 == null ? this[_members][$_get](0) : t2) : null;
      for (let member of this[_members]) {
        if (!dart.equals(member, this[_winner])) member.rejectGesture(pointer);
      }
      this[_winner].acceptGesture(pointer);
    }
    rejectGesture(pointer) {
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 45, 12, "_pointer == pointer");
      this[_close]();
      for (let member of this[_members])
        member.rejectGesture(pointer);
    }
    [_close]() {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 51, 12, "!_resolved");
      this[_resolved] = true;
      let combiner = this[_owner$][_combiners][$remove](this[_pointer$0]);
      if (!dart.equals(combiner, this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 55, 12, "combiner == this");
    }
    [_add](pointer, member) {
      if (!!dart.test(this[_resolved])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 59, 12, "!_resolved");
      if (!(this[_pointer$0] == pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 60, 12, "_pointer == pointer");
      this[_members][$add](member);
      this[_entry] == null ? this[_entry] = binding$0.GestureBinding.instance.gestureArena.add(pointer, this) : null;
      return new team._CombiningGestureArenaEntry.new(this, member);
    }
    [_resolve$](member, disposition) {
      let t2;
      if (dart.test(this[_resolved])) return;
      if (dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_members][$remove](member);
        member.rejectGesture(this[_pointer$0]);
        if (dart.test(this[_members][$isEmpty])) this[_entry].resolve(disposition);
      } else {
        if (!dart.equals(disposition, arena.GestureDisposition.accepted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/team.dart", 73, 14, "disposition == GestureDisposition.accepted");
        this[_winner] == null ? this[_winner] = (t2 = this[_owner$].captain, t2 == null ? member : t2) : null;
        this[_entry].resolve(disposition);
      }
    }
  };
  (team._CombiningGestureArenaMember.new = function(_owner, _pointer) {
    this[_members] = JSArrayOfGestureArenaMember().of([]);
    this[_resolved] = false;
    this[_winner] = null;
    this[_entry] = null;
    this[_owner$] = _owner;
    this[_pointer$0] = _pointer;
    ;
  }).prototype = team._CombiningGestureArenaMember.prototype;
  dart.addTypeTests(team._CombiningGestureArenaMember);
  dart.setMethodSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getMethods(team._CombiningGestureArenaMember.__proto__),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_close]: dart.fnType(dart.void, []),
    [_add]: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember]),
    [_resolve$]: dart.fnType(dart.void, [arena.GestureArenaMember, arena.GestureDisposition])
  }));
  dart.setLibraryUri(team._CombiningGestureArenaMember, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(team._CombiningGestureArenaMember, () => ({
    __proto__: dart.getFields(team._CombiningGestureArenaMember.__proto__),
    [_owner$]: dart.finalFieldType(team.GestureArenaTeam),
    [_members]: dart.finalFieldType(core.List$(arena.GestureArenaMember)),
    [_pointer$0]: dart.finalFieldType(core.int),
    [_resolved]: dart.fieldType(core.bool),
    [_winner]: dart.fieldType(arena.GestureArenaMember),
    [_entry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  team.GestureArenaTeam = class GestureArenaTeam extends core.Object {
    get captain() {
      return this[captain];
    }
    set captain(value) {
      this[captain] = value;
    }
    add(pointer, member) {
      let combiner = this[_combiners][$putIfAbsent](pointer, dart.fn(() => new team._CombiningGestureArenaMember.new(this, pointer), VoidTo_CombiningGestureArenaMember()));
      return combiner[_add](pointer, member);
    }
  };
  (team.GestureArenaTeam.new = function() {
    this[_combiners] = new (IdentityMapOfint$_CombiningGestureArenaMember()).new();
    this[captain] = null;
    ;
  }).prototype = team.GestureArenaTeam.prototype;
  dart.addTypeTests(team.GestureArenaTeam);
  const captain = Symbol("GestureArenaTeam.captain");
  dart.setMethodSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getMethods(team.GestureArenaTeam.__proto__),
    add: dart.fnType(arena.GestureArenaEntry, [core.int, arena.GestureArenaMember])
  }));
  dart.setLibraryUri(team.GestureArenaTeam, "package:flutter_web/src/gestures/team.dart");
  dart.setFieldSignature(team.GestureArenaTeam, () => ({
    __proto__: dart.getFields(team.GestureArenaTeam.__proto__),
    [_combiners]: dart.finalFieldType(core.Map$(core.int, team._CombiningGestureArenaMember)),
    captain: dart.fieldType(arena.GestureArenaMember)
  }));
  const _pendingPointerEvents = dart.privateName(binding$0, "_pendingPointerEvents");
  const _hitTests = dart.privateName(binding$0, "_hitTests");
  const _handlePointerDataPacket = dart.privateName(binding$0, "_handlePointerDataPacket");
  const _flushPointerEventQueue = dart.privateName(binding$0, "_flushPointerEventQueue");
  const _handlePointerEvent = dart.privateName(binding$0, "_handlePointerEvent");
  binding$0.GestureBinding = class GestureBinding extends binding.BindingBase {
    static get instance() {
      return binding$0.GestureBinding._instance;
    }
  };
  binding$0.GestureBinding[dart.mixinOn] = BindingBase => class GestureBinding extends BindingBase {
    get pointerRouter() {
      return this[pointerRouter];
    }
    set pointerRouter(value) {
      super.pointerRouter = value;
    }
    get gestureArena() {
      return this[gestureArena];
    }
    set gestureArena(value) {
      super.gestureArena = value;
    }
    get pointerSignalResolver() {
      return this[pointerSignalResolver];
    }
    set pointerSignalResolver(value) {
      super.pointerSignalResolver = value;
    }
    initInstances() {
      super.initInstances();
      binding$0.GestureBinding._instance = this;
      this.window.onPointerDataPacket = dart.bind(this, _handlePointerDataPacket);
    }
    unlocked() {
      super.unlocked();
      this[_flushPointerEventQueue]();
    }
    [_handlePointerDataPacket](packet) {
      this[_pendingPointerEvents].addAll(converter.PointerEventConverter.expand(packet.data, this.window.devicePixelRatio));
      if (!dart.test(this.locked)) this[_flushPointerEventQueue]();
    }
    cancelPointer(pointer) {
      if (dart.test(this[_pendingPointerEvents][$isEmpty]) && !dart.test(this.locked)) async.scheduleMicrotask(dart.bind(this, _flushPointerEventQueue));
      this[_pendingPointerEvents].addFirst(new events.PointerCancelEvent.new({pointer: pointer}));
    }
    [_flushPointerEventQueue]() {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 102, 12, "!locked");
      while (dart.test(this[_pendingPointerEvents][$isNotEmpty]))
        this[_handlePointerEvent](this[_pendingPointerEvents].removeFirst());
    }
    [_handlePointerEvent](event) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 125, 12, "!locked");
      let hitTestResult = null;
      if (events.PointerDownEvent.is(event) || events.PointerSignalEvent.is(event)) {
        if (!!dart.test(this[_hitTests][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 128, 14, "!_hitTests.containsKey(event.pointer)");
        hitTestResult = new hit_test.HitTestResult.new();
        this.hitTest(hitTestResult, event.position);
        if (events.PointerDownEvent.is(event)) {
          this[_hitTests][$_set](event.pointer, hitTestResult);
        }
        if (!dart.test(dart.fn(() => {
          if (dart.test(debug.debugPrintHitTestResults)) print.debugPrint(dart.str(event) + ": " + dart.str(hitTestResult));
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 134, 14, "() {\r\n        if (debugPrintHitTestResults) debugPrint('$event: $hitTestResult');\r\n        return true;\r\n      }()");
      } else if (events.PointerUpEvent.is(event) || events.PointerCancelEvent.is(event)) {
        hitTestResult = this[_hitTests][$remove](event.pointer);
      } else if (dart.test(event.down)) {
        hitTestResult = this[_hitTests][$_get](event.pointer);
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(debug.debugPrintMouseHoverEvents) && events.PointerHoverEvent.is(event)) print.debugPrint(dart.str(event));
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 148, 12, "() {\r\n      if (debugPrintMouseHoverEvents && event is PointerHoverEvent)\r\n        debugPrint('$event');\r\n      return true;\r\n    }()");
      if (hitTestResult != null || events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event)) {
        this.dispatchEvent(event, hitTestResult);
      }
    }
    hitTest(result, position) {
      result.add(new hit_test.HitTestEntry.new(this));
    }
    dispatchEvent(event, hitTestResult) {
      if (!!dart.test(this.locked)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 175, 12, "!locked");
      if (hitTestResult == null) {
        if (!(events.PointerHoverEvent.is(event) || events.PointerAddedEvent.is(event) || events.PointerRemovedEvent.is(event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/binding.dart", 179, 14, "event is PointerHoverEvent ||\r\n          event is PointerAddedEvent ||\r\n          event is PointerRemovedEvent");
        try {
          this.pointerRouter.route(event);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a non-hit-tested pointer event"), event: event, hitTestEntry: null, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerEvent()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfPointerEvent())}));
        }
        return;
      }
      for (let entry of hitTestResult.path) {
        try {
          entry.target.handleEvent(event, entry);
        } catch (e$) {
          let exception = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          assertions.FlutterError.reportError(new binding$0.FlutterErrorDetailsForPointerEventDispatcher.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while dispatching a pointer event"), event: event, hitTestEntry: entry, informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfObject()).new(function*() {
              yield new (DiagnosticsPropertyOfPointerEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
              yield new (DiagnosticsPropertyOfHitTestTarget()).new("Target", entry.target, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }), VoidToIterableOfDiagnosticsPropertyOfObject())}));
        }
      }
    }
    handleEvent(event, entry) {
      this.pointerRouter.route(event);
      if (events.PointerDownEvent.is(event)) {
        this.gestureArena.close(event.pointer);
      } else if (events.PointerUpEvent.is(event)) {
        this.gestureArena.sweep(event.pointer);
      } else if (events.PointerSignalEvent.is(event)) {
        this.pointerSignalResolver.resolve(event);
      }
    }
  };
  (binding$0.GestureBinding[dart.mixinNew] = function() {
    this[_pendingPointerEvents] = new (ListQueueOfPointerEvent()).new();
    this[pointerRouter] = new pointer_router.PointerRouter.new();
    this[gestureArena] = new arena.GestureArenaManager.new();
    this[pointerSignalResolver] = new pointer_signal_resolver.PointerSignalResolver.new();
    this[_hitTests] = new (IdentityMapOfint$HitTestResult()).new();
  }).prototype = binding$0.GestureBinding.prototype;
  dart.addTypeTests(binding$0.GestureBinding);
  const pointerRouter = Symbol("GestureBinding.pointerRouter");
  const gestureArena = Symbol("GestureBinding.gestureArena");
  const pointerSignalResolver = Symbol("GestureBinding.pointerSignalResolver");
  binding$0.GestureBinding[dart.implements] = () => [hit_test.HitTestable, hit_test.HitTestDispatcher, hit_test.HitTestTarget, binding.BindingBase];
  dart.setMethodSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getMethods(binding$0.GestureBinding.__proto__),
    [_handlePointerDataPacket]: dart.fnType(dart.void, [ui.PointerDataPacket]),
    cancelPointer: dart.fnType(dart.void, [core.int]),
    [_flushPointerEventQueue]: dart.fnType(dart.void, []),
    [_handlePointerEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    hitTest: dart.fnType(dart.void, [hit_test.HitTestResult, ui.Offset]),
    dispatchEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestResult]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent, hit_test.HitTestEntry])
  }));
  dart.setLibraryUri(binding$0.GestureBinding, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(binding$0.GestureBinding, () => ({
    __proto__: dart.getFields(binding$0.GestureBinding.__proto__),
    [_pendingPointerEvents]: dart.finalFieldType(collection.Queue$(events.PointerEvent)),
    pointerRouter: dart.finalFieldType(pointer_router.PointerRouter),
    gestureArena: dart.finalFieldType(arena.GestureArenaManager),
    pointerSignalResolver: dart.finalFieldType(pointer_signal_resolver.PointerSignalResolver),
    [_hitTests]: dart.finalFieldType(core.Map$(core.int, hit_test.HitTestResult))
  }));
  dart.defineLazy(binding$0.GestureBinding, {
    /*binding$0.GestureBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  binding$0.FlutterErrorDetailsForPointerEventDispatcher = class FlutterErrorDetailsForPointerEventDispatcher extends assertions.FlutterErrorDetails {
    get event() {
      return this[event$0];
    }
    set event(value) {
      super.event = value;
    }
    get hitTestEntry() {
      return this[hitTestEntry$];
    }
    set hitTestEntry(value) {
      super.hitTestEntry = value;
    }
  };
  (binding$0.FlutterErrorDetailsForPointerEventDispatcher.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let hitTestEntry = opts && 'hitTestEntry' in opts ? opts.hitTestEntry : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[event$0] = event;
    this[hitTestEntry$] = hitTestEntry;
    binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__.new.call(this, {exception: exception, stack: stack, library: library, context: context, informationCollector: informationCollector, silent: silent});
    ;
  }).prototype = binding$0.FlutterErrorDetailsForPointerEventDispatcher.prototype;
  dart.addTypeTests(binding$0.FlutterErrorDetailsForPointerEventDispatcher);
  const event$0 = Symbol("FlutterErrorDetailsForPointerEventDispatcher.event");
  const hitTestEntry$ = Symbol("FlutterErrorDetailsForPointerEventDispatcher.hitTestEntry");
  dart.setLibraryUri(binding$0.FlutterErrorDetailsForPointerEventDispatcher, "package:flutter_web/src/gestures/binding.dart");
  dart.setFieldSignature(binding$0.FlutterErrorDetailsForPointerEventDispatcher, () => ({
    __proto__: dart.getFields(binding$0.FlutterErrorDetailsForPointerEventDispatcher.__proto__),
    event: dart.finalFieldType(events.PointerEvent),
    hitTestEntry: dart.finalFieldType(hit_test.HitTestEntry)
  }));
  const _firstRegisteredCallback = dart.privateName(pointer_signal_resolver, "_firstRegisteredCallback");
  const _currentEvent = dart.privateName(pointer_signal_resolver, "_currentEvent");
  pointer_signal_resolver.PointerSignalResolver = class PointerSignalResolver extends core.Object {
    register(event, callback) {
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 32, 12, "event != null");
      if (!(callback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 33, 12, "callback != null");
      if (!(this[_currentEvent] == null || dart.equals(this[_currentEvent], event))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 34, 12, "_currentEvent == null || _currentEvent == event");
      if (this[_firstRegisteredCallback] != null) {
        return;
      }
      this[_currentEvent] = event;
      this[_firstRegisteredCallback] = callback;
    }
    resolve(event) {
      if (this[_firstRegisteredCallback] == null) {
        if (!(this[_currentEvent] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 49, 14, "_currentEvent == null");
        return;
      }
      if (!dart.equals(this[_currentEvent], event)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/pointer_signal_resolver.dart", 52, 12, "_currentEvent == event");
      try {
        this[_firstRegisteredCallback](event);
      } catch (e) {
        let exception = dart.getThrown(e);
        let stack = dart.stackTrace(e);
        assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "gesture library", context: new assertions.ErrorDescription.new("while resolving a PointerSignalEvent"), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfPointerSignalEvent()).new(function*() {
            yield new (DiagnosticsPropertyOfPointerSignalEvent()).new("Event", event, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
          }), VoidToIterableOfDiagnosticsPropertyOfPointerSignalEvent())}));
      }
      this[_firstRegisteredCallback] = null;
      this[_currentEvent] = null;
    }
  };
  (pointer_signal_resolver.PointerSignalResolver.new = function() {
    this[_firstRegisteredCallback] = null;
    this[_currentEvent] = null;
    ;
  }).prototype = pointer_signal_resolver.PointerSignalResolver.prototype;
  dart.addTypeTests(pointer_signal_resolver.PointerSignalResolver);
  dart.setMethodSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getMethods(pointer_signal_resolver.PointerSignalResolver.__proto__),
    register: dart.fnType(dart.void, [events.PointerSignalEvent, dart.fnType(dart.void, [events.PointerSignalEvent])]),
    resolve: dart.fnType(dart.void, [events.PointerSignalEvent])
  }));
  dart.setLibraryUri(pointer_signal_resolver.PointerSignalResolver, "package:flutter_web/src/gestures/pointer_signal_resolver.dart");
  dart.setFieldSignature(pointer_signal_resolver.PointerSignalResolver, () => ({
    __proto__: dart.getFields(pointer_signal_resolver.PointerSignalResolver.__proto__),
    [_firstRegisteredCallback]: dart.fieldType(dart.fnType(dart.void, [events.PointerSignalEvent])),
    [_currentEvent]: dart.fieldType(events.PointerSignalEvent)
  }));
  hit_test.HitTestable = class HitTestable extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestable[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestable.prototype;
  dart.addTypeTests(hit_test.HitTestable);
  dart.setLibraryUri(hit_test.HitTestable, "package:flutter_web/src/gestures/hit_test.dart");
  hit_test.HitTestDispatcher = class HitTestDispatcher extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestDispatcher[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestDispatcher.prototype;
  dart.addTypeTests(hit_test.HitTestDispatcher);
  dart.setLibraryUri(hit_test.HitTestDispatcher, "package:flutter_web/src/gestures/hit_test.dart");
  hit_test.HitTestTarget = class HitTestTarget extends core.Object {
    static __() {
      return null;
    }
  };
  (hit_test.HitTestTarget[dart.mixinNew] = function() {
  }).prototype = hit_test.HitTestTarget.prototype;
  dart.addTypeTests(hit_test.HitTestTarget);
  dart.setLibraryUri(hit_test.HitTestTarget, "package:flutter_web/src/gestures/hit_test.dart");
  hit_test.HitTestEntry = class HitTestEntry extends core.Object {
    get target() {
      return this[target$];
    }
    set target(value) {
      super.target = value;
    }
    toString() {
      return dart.str(this.target);
    }
  };
  (hit_test.HitTestEntry.new = function(target) {
    this[target$] = target;
    ;
  }).prototype = hit_test.HitTestEntry.prototype;
  dart.addTypeTests(hit_test.HitTestEntry);
  const target$ = Symbol("HitTestEntry.target");
  dart.setLibraryUri(hit_test.HitTestEntry, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestEntry, () => ({
    __proto__: dart.getFields(hit_test.HitTestEntry.__proto__),
    target: dart.finalFieldType(hit_test.HitTestTarget)
  }));
  dart.defineExtensionMethods(hit_test.HitTestEntry, ['toString']);
  const _path = dart.privateName(hit_test, "_path");
  hit_test.HitTestResult = class HitTestResult extends core.Object {
    get path() {
      return this[_path];
    }
    add(entry) {
      this[_path][$add](entry);
    }
    toString() {
      if (dart.test(util.assertionsEnabled)) {
        return "HitTestResult(" + dart.str(dart.test(this[_path][$isEmpty]) ? "<empty path>" : this[_path][$join](", ")) + ")";
      } else {
        return super[$toString]();
      }
    }
  };
  (hit_test.HitTestResult.new = function() {
    this[_path] = JSArrayOfHitTestEntry().of([]);
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  (hit_test.HitTestResult.wrap = function(result) {
    this[_path] = result[_path];
    ;
  }).prototype = hit_test.HitTestResult.prototype;
  dart.addTypeTests(hit_test.HitTestResult);
  dart.setMethodSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getMethods(hit_test.HitTestResult.__proto__),
    add: dart.fnType(dart.void, [hit_test.HitTestEntry])
  }));
  dart.setGetterSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getGetters(hit_test.HitTestResult.__proto__),
    path: core.Iterable$(hit_test.HitTestEntry)
  }));
  dart.setLibraryUri(hit_test.HitTestResult, "package:flutter_web/src/gestures/hit_test.dart");
  dart.setFieldSignature(hit_test.HitTestResult, () => ({
    __proto__: dart.getFields(hit_test.HitTestResult.__proto__),
    [_path]: dart.finalFieldType(core.List$(hit_test.HitTestEntry))
  }));
  dart.defineExtensionMethods(hit_test.HitTestResult, ['toString']);
  const _pointer = dart.privateName(converter, "_pointer");
  const _down = dart.privateName(converter, "_down");
  converter._PointerState = class _PointerState extends core.Object {
    get pointer() {
      return this[_pointer];
    }
    startNewPointer() {
      converter._PointerState._pointerCount = dart.notNull(converter._PointerState._pointerCount) + 1;
      this[_pointer] = converter._PointerState._pointerCount;
    }
    get down() {
      return this[_down];
    }
    setDown() {
      if (!!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 27, 12, "!_down");
      this[_down] = true;
    }
    setUp() {
      if (!dart.test(this[_down])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 32, 12, "_down");
      this[_down] = false;
    }
    deltaTo(to) {
      return to['-'](this.lastPosition);
    }
    toString() {
      return "_PointerState(pointer: " + dart.str(this.pointer) + ", down: " + dart.str(this.down) + ", lastPosition: " + dart.str(this.lastPosition) + ")";
    }
  };
  (converter._PointerState.new = function(lastPosition) {
    this[_pointer] = null;
    this[_down] = false;
    this.lastPosition = lastPosition;
    ;
  }).prototype = converter._PointerState.prototype;
  dart.addTypeTests(converter._PointerState);
  dart.setMethodSignature(converter._PointerState, () => ({
    __proto__: dart.getMethods(converter._PointerState.__proto__),
    startNewPointer: dart.fnType(dart.void, []),
    setDown: dart.fnType(dart.void, []),
    setUp: dart.fnType(dart.void, []),
    deltaTo: dart.fnType(ui.Offset, [ui.Offset])
  }));
  dart.setGetterSignature(converter._PointerState, () => ({
    __proto__: dart.getGetters(converter._PointerState.__proto__),
    pointer: core.int,
    down: core.bool
  }));
  dart.setLibraryUri(converter._PointerState, "package:flutter_web/src/gestures/converter.dart");
  dart.setFieldSignature(converter._PointerState, () => ({
    __proto__: dart.getFields(converter._PointerState.__proto__),
    [_pointer]: dart.fieldType(core.int),
    [_down]: dart.fieldType(core.bool),
    lastPosition: dart.fieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(converter._PointerState, ['toString']);
  dart.defineLazy(converter._PointerState, {
    /*converter._PointerState._pointerCount*/get _pointerCount() {
      return 0;
    },
    set _pointerCount(_) {}
  });
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
  converter.PointerEventConverter = class PointerEventConverter extends core.Object {
    static clearPointers() {
      return converter.PointerEventConverter._pointers[$clear]();
    }
    static _ensureStateForPointer(datum, position) {
      return converter.PointerEventConverter._pointers[$putIfAbsent](datum.device, dart.fn(() => new converter._PointerState.new(position), VoidTo_PointerState()));
    }
    static expand(data, devicePixelRatio) {
      return new (SyncIterableOfPointerEvent()).new(function* expand() {
        for (let datum of data) {
          let position = new ui.Offset.new(datum.physicalX, datum.physicalY)['/'](devicePixelRatio);
          let radiusMinor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMinor, devicePixelRatio);
          let radiusMajor = converter.PointerEventConverter._toLogicalPixels(datum.radiusMajor, devicePixelRatio);
          let radiusMin = converter.PointerEventConverter._toLogicalPixels(datum.radiusMin, devicePixelRatio);
          let radiusMax = converter.PointerEventConverter._toLogicalPixels(datum.radiusMax, devicePixelRatio);
          let timeStamp = datum.timeStamp;
          let kind = datum.kind;
          if (!(datum.change != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 116, 14, "datum.change != null");
          if (datum.signalKind == null || dart.equals(datum.signalKind, ui.PointerSignalKind.none)) {
            switch (datum.change) {
              case C23 || CT.C23:
              {
                if (!!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 121, 20, "!_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 123, 20, "state.lastPosition == position");
                yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C24 || CT.C24:
              {
                let alreadyAdded = converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 143, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 145, 22, "state.lastPosition == position");
                  yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                state.lastPosition = position;
                break;
              }
              case C25 || CT.C25:
              {
                let alreadyAdded = converter.PointerEventConverter._pointers[$containsKey](datum.device);
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 187, 20, "!state.down");
                if (!dart.test(alreadyAdded)) {
                  if (!dart.equals(state.lastPosition, position)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 189, 22, "state.lastPosition == position");
                  yield new events.PointerAddedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(state.lastPosition, position)) {
                  yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                state.startNewPointer();
                state.setDown();
                yield new events.PointerDownEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                break;
              }
              case C26 || CT.C26:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 260, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 262, 20, "state.down");
                yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, platformData: datum.platformData});
                state.lastPosition = position;
                break;
              }
              case C27 || CT.C27:
              case C28 || CT.C28:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 289, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (!dart.test(state.down)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 291, 20, "state.down");
                if (!dart.equals(position, state.lastPosition)) {
                  yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  state.lastPosition = position;
                }
                if (!dart.equals(position, state.lastPosition)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 322, 20, "position == state.lastPosition");
                state.setUp();
                if (dart.equals(datum.change, ui.PointerChange.up)) {
                  yield new events.PointerUpEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                } else {
                  yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                break;
              }
              case C29 || CT.C29:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 370, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._pointers[$_get](datum.device);
                if (dart.test(state.down)) {
                  yield new events.PointerCancelEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: state.lastPosition, buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt});
                }
                if (!dart.equals(position, state.lastPosition)) {
                  yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                }
                converter.PointerEventConverter._pointers[$remove](datum.device);
                yield new events.PointerRemovedEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, radiusMin: radiusMin, radiusMax: radiusMax});
                break;
              }
            }
          } else {
            switch (datum.signalKind) {
              case C30 || CT.C30:
              {
                if (!dart.test(converter.PointerEventConverter._pointers[$containsKey](datum.device))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 436, 20, "_pointers.containsKey(datum.device)");
                let state = converter.PointerEventConverter._ensureStateForPointer(datum, position);
                if (!dart.equals(state.lastPosition, position)) {
                  if (dart.test(state.down)) {
                    yield new events.PointerMoveEvent.new({timeStamp: timeStamp, pointer: state.pointer, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: converter._synthesiseDownButtons(datum.buttons, kind), obscured: datum.obscured, pressure: datum.pressure, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  } else {
                    yield new events.PointerHoverEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, delta: state.deltaTo(position), buttons: datum.buttons, obscured: datum.obscured, pressureMin: datum.pressureMin, pressureMax: datum.pressureMax, distance: datum.distance, distanceMax: datum.distanceMax, size: datum.size, radiusMajor: radiusMajor, radiusMinor: radiusMinor, radiusMin: radiusMin, radiusMax: radiusMax, orientation: datum.orientation, tilt: datum.tilt, synthesized: true});
                  }
                  state.lastPosition = position;
                }
                let scrollDelta = new ui.Offset.new(datum.scrollDeltaX, datum.scrollDeltaY)['/'](devicePixelRatio);
                yield new events.PointerScrollEvent.new({timeStamp: timeStamp, kind: kind, device: datum.device, position: position, scrollDelta: scrollDelta});
                break;
              }
              case C31 || CT.C31:
              {
                if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/converter.dart", 504, 17, "false");
                break;
              }
              case C32 || CT.C32:
              {
                break;
              }
            }
          }
        }
      });
    }
    static _toLogicalPixels(physicalPixels, devicePixelRatio) {
      return physicalPixels == null ? null : dart.notNull(physicalPixels) / dart.notNull(devicePixelRatio);
    }
  };
  (converter.PointerEventConverter.__ = function() {
    ;
  }).prototype = converter.PointerEventConverter.prototype;
  dart.addTypeTests(converter.PointerEventConverter);
  dart.setLibraryUri(converter.PointerEventConverter, "package:flutter_web/src/gestures/converter.dart");
  dart.defineLazy(converter.PointerEventConverter, {
    /*converter.PointerEventConverter._pointers*/get _pointers() {
      return new (IdentityMapOfint$_PointerState()).new();
    }
  });
  let C33;
  let C34;
  converter._synthesiseDownButtons = function _synthesiseDownButtons(buttons, kind) {
    switch (kind) {
      case C6 || CT.C6:
      {
        return buttons;
      }
      case C4 || CT.C4:
      case C33 || CT.C33:
      case C34 || CT.C34:
      {
        return (dart.notNull(buttons) | 1) >>> 0;
      }
      default:
      {
        return buttons === 0 ? 1 : buttons;
      }
    }
  };
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  dart.defineLazy(constants, {
    /*constants.kPressTimeout*/get kPressTimeout() {
      return C35 || CT.C35;
    },
    /*constants.kHoverTapTimeout*/get kHoverTapTimeout() {
      return C36 || CT.C36;
    },
    /*constants.kHoverTapSlop*/get kHoverTapSlop() {
      return 20;
    },
    /*constants.kLongPressTimeout*/get kLongPressTimeout() {
      return C37 || CT.C37;
    },
    /*constants.kDoubleTapTimeout*/get kDoubleTapTimeout() {
      return C38 || CT.C38;
    },
    /*constants.kDoubleTapMinTime*/get kDoubleTapMinTime() {
      return C39 || CT.C39;
    },
    /*constants.kDoubleTapTouchSlop*/get kDoubleTapTouchSlop() {
      return 18;
    },
    /*constants.kDoubleTapSlop*/get kDoubleTapSlop() {
      return 100;
    },
    /*constants.kZoomControlsTimeout*/get kZoomControlsTimeout() {
      return C40 || CT.C40;
    },
    /*constants.kTouchSlop*/get kTouchSlop() {
      return 18;
    },
    /*constants.kPagingTouchSlop*/get kPagingTouchSlop() {
      return 36;
    },
    /*constants.kPanSlop*/get kPanSlop() {
      return 36;
    },
    /*constants.kScaleSlop*/get kScaleSlop() {
      return 18;
    },
    /*constants.kWindowTouchSlop*/get kWindowTouchSlop() {
      return 16;
    },
    /*constants.kMinFlingVelocity*/get kMinFlingVelocity() {
      return 50;
    },
    /*constants.kMaxFlingVelocity*/get kMaxFlingVelocity() {
      return 8000;
    },
    /*constants.kJumpTapTimeout*/get kJumpTapTimeout() {
      return C37 || CT.C37;
    }
  });
  tap.TapDownDetails = class TapDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get kind() {
      return this[kind$0];
    }
    set kind(value) {
      super.kind = value;
    }
  };
  (tap.TapDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[globalPosition$] = globalPosition;
    this[kind$0] = kind;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 26, 15, "globalPosition != null");
    ;
  }).prototype = tap.TapDownDetails.prototype;
  dart.addTypeTests(tap.TapDownDetails);
  const globalPosition$ = Symbol("TapDownDetails.globalPosition");
  const kind$0 = Symbol("TapDownDetails.kind");
  dart.setLibraryUri(tap.TapDownDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapDownDetails, () => ({
    __proto__: dart.getFields(tap.TapDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    kind: dart.finalFieldType(ui.PointerDeviceKind)
  }));
  tap.TapUpDetails = class TapUpDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$0];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (tap.TapUpDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    this[globalPosition$0] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 56, 16, "globalPosition != null");
    ;
  }).prototype = tap.TapUpDetails.prototype;
  dart.addTypeTests(tap.TapUpDetails);
  const globalPosition$0 = Symbol("TapUpDetails.globalPosition");
  dart.setLibraryUri(tap.TapUpDetails, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapUpDetails, () => ({
    __proto__: dart.getFields(tap.TapUpDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  const _sentTapDown = dart.privateName(tap, "_sentTapDown");
  const _wonArenaForPrimaryPointer = dart.privateName(tap, "_wonArenaForPrimaryPointer");
  const _finalPosition = dart.privateName(tap, "_finalPosition");
  const _initialButtons = dart.privateName(tap, "_initialButtons");
  const _checkUp = dart.privateName(tap, "_checkUp");
  const _checkCancel = dart.privateName(tap, "_checkCancel");
  const _reset = dart.privateName(tap, "_reset");
  const _checkDown = dart.privateName(tap, "_checkDown");
  tap.TapGestureRecognizer = class TapGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onTapDown() {
      return this[onTapDown];
    }
    set onTapDown(value) {
      this[onTapDown] = value;
    }
    get onTapUp() {
      return this[onTapUp];
    }
    set onTapUp(value) {
      this[onTapUp] = value;
    }
    get onTap() {
      return this[onTap];
    }
    set onTap(value) {
      this[onTap] = value;
    }
    get onTapCancel() {
      return this[onTapCancel];
    }
    set onTapCancel(value) {
      this[onTapCancel] = value;
    }
    get onSecondaryTapDown() {
      return this[onSecondaryTapDown];
    }
    set onSecondaryTapDown(value) {
      this[onSecondaryTapDown] = value;
    }
    get onSecondaryTapUp() {
      return this[onSecondaryTapUp];
    }
    set onSecondaryTapUp(value) {
      this[onSecondaryTapUp] = value;
    }
    get onSecondaryTapCancel() {
      return this[onSecondaryTapCancel];
    }
    set onSecondaryTapCancel(value) {
      this[onSecondaryTapCancel] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onTapDown == null && this.onTap == null && this.onTapUp == null && this.onTapCancel == null) return false;
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown == null && this.onSecondaryTapUp == null && this.onSecondaryTapCancel == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    addAllowedPointer(event) {
      super.addAllowedPointer(event);
      this[_initialButtons] = event.buttons;
    }
    handlePrimaryPointer(event) {
      if (events.PointerUpEvent.is(event)) {
        this[_finalPosition] = event.position;
        this[_checkUp]();
      } else if (events.PointerCancelEvent.is(event)) {
        this.resolve(arena.GestureDisposition.rejected);
        if (dart.test(this[_sentTapDown])) {
          this[_checkCancel]("");
        }
        this[_reset]();
      } else if (event.buttons != this[_initialButtons]) {
        this.resolve(arena.GestureDisposition.rejected);
        this.stopTrackingPointer(this.primaryPointer);
      }
    }
    resolve(disposition) {
      if (dart.test(this[_wonArenaForPrimaryPointer]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        if (!dart.test(this[_sentTapDown])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 284, 14, "_sentTapDown");
        this[_checkCancel]("spontaneous ");
        this[_reset]();
      }
      super.resolve(disposition);
    }
    didExceedDeadlineWithEvent(event) {
      this[_checkDown](event.pointer);
    }
    acceptGesture(pointer) {
      super.acceptGesture(pointer);
      if (pointer == this.primaryPointer) {
        this[_checkDown](pointer);
        this[_wonArenaForPrimaryPointer] = true;
        this[_checkUp]();
      }
    }
    rejectGesture(pointer) {
      super.rejectGesture(pointer);
      if (pointer == this.primaryPointer) {
        if (!!dart.equals(this.state, recognizer.GestureRecognizerState.possible)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/tap.dart", 311, 14, "state != GestureRecognizerState.possible");
        if (dart.test(this[_sentTapDown])) this[_checkCancel]("forced ");
        this[_reset]();
      }
    }
    [_checkDown](pointer) {
      if (dart.test(this[_sentTapDown])) {
        return;
      }
      let details = new tap.TapDownDetails.new({globalPosition: this.initialPosition, kind: this.getKindForPointer(pointer)});
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => this.onTapDown(details), VoidTovoid()));
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapDown != null) this.invokeCallback(dart.void, "onSecondaryTapDown", dart.fn(() => this.onSecondaryTapDown(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_sentTapDown] = true;
    }
    [_checkUp]() {
      if (!dart.test(this[_wonArenaForPrimaryPointer]) || this[_finalPosition] == null) {
        return;
      }
      let details = new tap.TapUpDetails.new({globalPosition: this[_finalPosition]});
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(details), VoidTovoid()));
          if (this.onTap != null) this.invokeCallback(dart.void, "onTap", this.onTap);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapUp != null) this.invokeCallback(dart.void, "onSecondaryTapUp", dart.fn(() => this.onSecondaryTapUp(details), VoidTovoid()));
          break;
        }
        default:
      }
      this[_reset]();
    }
    [_checkCancel](note) {
      switch (this[_initialButtons]) {
        case 1:
        {
          if (this.onTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onTapCancel", this.onTapCancel);
          break;
        }
        case 2:
        {
          if (this.onSecondaryTapCancel != null) this.invokeCallback(dart.void, dart.str(note) + "onSecondaryTapCancel", this.onSecondaryTapCancel);
          break;
        }
        default:
      }
    }
    [_reset]() {
      this[_sentTapDown] = false;
      this[_wonArenaForPrimaryPointer] = false;
      this[_finalPosition] = null;
      this[_initialButtons] = null;
    }
    get debugDescription() {
      return "tap";
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.FlagProperty.new("wonArenaForPrimaryPointer", {value: this[_wonArenaForPrimaryPointer], ifTrue: "won arena"}));
      properties.add(new (DiagnosticsPropertyOfOffset()).new("finalPosition", this[_finalPosition], {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("sentTapDown", {value: this[_sentTapDown], ifTrue: "sent tap down"}));
    }
  };
  (tap.TapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[onTapDown] = null;
    this[onTapUp] = null;
    this[onTap] = null;
    this[onTapCancel] = null;
    this[onSecondaryTapDown] = null;
    this[onSecondaryTapUp] = null;
    this[onSecondaryTapCancel] = null;
    this[_sentTapDown] = false;
    this[_wonArenaForPrimaryPointer] = false;
    this[_finalPosition] = null;
    this[_initialButtons] = null;
    tap.TapGestureRecognizer.__proto__.new.call(this, {deadline: constants.kPressTimeout, debugOwner: debugOwner});
    ;
  }).prototype = tap.TapGestureRecognizer.prototype;
  dart.addTypeTests(tap.TapGestureRecognizer);
  const onTapDown = Symbol("TapGestureRecognizer.onTapDown");
  const onTapUp = Symbol("TapGestureRecognizer.onTapUp");
  const onTap = Symbol("TapGestureRecognizer.onTap");
  const onTapCancel = Symbol("TapGestureRecognizer.onTapCancel");
  const onSecondaryTapDown = Symbol("TapGestureRecognizer.onSecondaryTapDown");
  const onSecondaryTapUp = Symbol("TapGestureRecognizer.onSecondaryTapUp");
  const onSecondaryTapCancel = Symbol("TapGestureRecognizer.onSecondaryTapCancel");
  dart.setMethodSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getMethods(tap.TapGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkDown]: dart.fnType(dart.void, [core.int]),
    [_checkUp]: dart.fnType(dart.void, []),
    [_checkCancel]: dart.fnType(dart.void, [core.String]),
    [_reset]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getGetters(tap.TapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(tap.TapGestureRecognizer, "package:flutter_web/src/gestures/tap.dart");
  dart.setFieldSignature(tap.TapGestureRecognizer, () => ({
    __proto__: dart.getFields(tap.TapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    onSecondaryTapDown: dart.fieldType(dart.fnType(dart.void, [tap.TapDownDetails])),
    onSecondaryTapUp: dart.fieldType(dart.fnType(dart.void, [tap.TapUpDetails])),
    onSecondaryTapCancel: dart.fieldType(dart.fnType(dart.void, [])),
    [_sentTapDown]: dart.fieldType(core.bool),
    [_wonArenaForPrimaryPointer]: dart.fieldType(core.bool),
    [_finalPosition]: dart.fieldType(ui.Offset),
    [_initialButtons]: dart.fieldType(core.int)
  }));
  eager.EagerGestureRecognizer = class EagerGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this.resolve(arena.GestureDisposition.accepted);
      this.stopTrackingPointer(event.pointer);
    }
    get debugDescription() {
      return "eager";
    }
    didStopTrackingLastPointer(pointer) {
    }
    handleEvent(event) {
    }
  };
  (eager.EagerGestureRecognizer.new = function(opts) {
    let kind = opts && 'kind' in opts ? opts.kind : null;
    eager.EagerGestureRecognizer.__proto__.new.call(this, {kind: kind});
    ;
  }).prototype = eager.EagerGestureRecognizer.prototype;
  dart.addTypeTests(eager.EagerGestureRecognizer);
  dart.setMethodSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getMethods(eager.EagerGestureRecognizer.__proto__),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent])
  }));
  dart.setGetterSignature(eager.EagerGestureRecognizer, () => ({
    __proto__: dart.getGetters(eager.EagerGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(eager.EagerGestureRecognizer, "package:flutter_web/src/gestures/eager.dart");
  const _name$2 = dart.privateName(force_press, "_name");
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  force_press._ForceState = class _ForceState extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (force_press._ForceState.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = force_press._ForceState.prototype;
  dart.addTypeTests(force_press._ForceState);
  dart.setLibraryUri(force_press._ForceState, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press._ForceState, () => ({
    __proto__: dart.getFields(force_press._ForceState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(force_press._ForceState, ['toString']);
  force_press._ForceState.ready = C41 || CT.C41;
  force_press._ForceState.possible = C42 || CT.C42;
  force_press._ForceState.accepted = C43 || CT.C43;
  force_press._ForceState.started = C44 || CT.C44;
  force_press._ForceState.peaked = C45 || CT.C45;
  force_press._ForceState.values = C46 || CT.C46;
  force_press.ForcePressDetails = class ForcePressDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$1];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get pressure() {
      return this[pressure$0];
    }
    set pressure(value) {
      super.pressure = value;
    }
  };
  (force_press.ForcePressDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    this[globalPosition$1] = globalPosition;
    this[pressure$0] = pressure;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 55, 16, "globalPosition != null");
    if (!(pressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 56, 16, "pressure != null");
    ;
  }).prototype = force_press.ForcePressDetails.prototype;
  dart.addTypeTests(force_press.ForcePressDetails);
  const globalPosition$1 = Symbol("ForcePressDetails.globalPosition");
  const pressure$0 = Symbol("ForcePressDetails.pressure");
  dart.setLibraryUri(force_press.ForcePressDetails, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressDetails, () => ({
    __proto__: dart.getFields(force_press.ForcePressDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    pressure: dart.finalFieldType(core.double)
  }));
  let C47;
  const _lastPosition = dart.privateName(force_press, "_lastPosition");
  const _lastPressure = dart.privateName(force_press, "_lastPressure");
  const _state$ = dart.privateName(force_press, "_state");
  force_press.ForcePressGestureRecognizer = class ForcePressGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get onStart() {
      return this[onStart$];
    }
    set onStart(value) {
      this[onStart$] = value;
    }
    get onUpdate() {
      return this[onUpdate$];
    }
    set onUpdate(value) {
      this[onUpdate$] = value;
    }
    get onPeak() {
      return this[onPeak];
    }
    set onPeak(value) {
      this[onPeak] = value;
    }
    get onEnd() {
      return this[onEnd$];
    }
    set onEnd(value) {
      this[onEnd$] = value;
    }
    get startPressure() {
      return this[startPressure$];
    }
    set startPressure(value) {
      super.startPressure = value;
    }
    get peakPressure() {
      return this[peakPressure$];
    }
    set peakPressure(value) {
      super.peakPressure = value;
    }
    get interpolation() {
      return this[interpolation$];
    }
    set interpolation(value) {
      super.interpolation = value;
    }
    addAllowedPointer(event) {
      if (!events.PointerUpEvent.is(event) && dart.notNull(event.pressureMax) <= 1.0) {
        this.resolve(arena.GestureDisposition.rejected);
      } else {
        this.startTrackingPointer(event.pointer);
        if (dart.equals(this[_state$], force_press._ForceState.ready)) {
          this[_state$] = force_press._ForceState.possible;
          this[_lastPosition] = event.position;
        }
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$], force_press._ForceState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 232, 12, "_state != _ForceState.ready");
      if (events.PointerMoveEvent.is(event) || events.PointerDownEvent.is(event)) {
        if (dart.notNull(event.pressure) > dart.notNull(event.pressureMax) || dart.notNull(event.pressure) < dart.notNull(event.pressureMin)) {
          print.debugPrint("The reported device pressure " + dart.toString(event.pressure) + " is outside of the device pressure range where: " + dart.toString(event.pressureMin) + " <= pressure <= " + dart.toString(event.pressureMax));
        }
        let pressure = this.interpolation(event.pressureMin, event.pressureMax, event.pressure);
        if (!(dart.notNull(pressure) >= 0.0 && dart.notNull(pressure) <= 1.0 || pressure[$isNaN])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 249, 14, "(pressure >= 0.0 &&\r\n                  pressure <=\r\n                      1.0) || // Interpolated pressure must be between 1.0 and 0.0...\r\n              pressure\r\n                  .isNaN");
        this[_lastPosition] = event.position;
        this[_lastPressure] = pressure;
        if (dart.equals(this[_state$], force_press._ForceState.possible)) {
          if (dart.notNull(pressure) > dart.notNull(this.startPressure)) {
            this[_state$] = force_press._ForceState.started;
            this.resolve(arena.GestureDisposition.accepted);
          } else if (dart.notNull(event.delta.distanceSquared) > 18) {
            this.resolve(arena.GestureDisposition.rejected);
          }
        }
        if (dart.notNull(pressure) > dart.notNull(this.startPressure) && dart.equals(this[_state$], force_press._ForceState.accepted)) {
          this[_state$] = force_press._ForceState.started;
          if (this.onStart != null) {
            this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: this[_lastPosition]})), VoidTovoid()));
          }
        }
        if (this.onPeak != null && dart.notNull(pressure) > dart.notNull(this.peakPressure) && dart.equals(this[_state$], force_press._ForceState.started)) {
          this[_state$] = force_press._ForceState.peaked;
          if (this.onPeak != null) {
            this.invokeCallback(dart.void, "onPeak", dart.fn(() => this.onPeak(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
        if (this.onUpdate != null && !pressure[$isNaN] && (dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked))) {
          if (this.onUpdate != null) {
            this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(new force_press.ForcePressDetails.new({pressure: pressure, globalPosition: event.position})), VoidTovoid()));
          }
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (dart.equals(this[_state$], force_press._ForceState.possible)) this[_state$] = force_press._ForceState.accepted;
      if (this.onStart != null && dart.equals(this[_state$], force_press._ForceState.started)) {
        this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(new force_press.ForcePressDetails.new({pressure: this[_lastPressure], globalPosition: this[_lastPosition]})), VoidTovoid()));
      }
    }
    didStopTrackingLastPointer(pointer) {
      let wasAccepted = dart.equals(this[_state$], force_press._ForceState.started) || dart.equals(this[_state$], force_press._ForceState.peaked);
      if (dart.equals(this[_state$], force_press._ForceState.possible)) {
        this.resolve(arena.GestureDisposition.rejected);
        return;
      }
      if (wasAccepted && this.onEnd != null) {
        if (this.onEnd != null) {
          this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(new force_press.ForcePressDetails.new({pressure: 0.0, globalPosition: this[_lastPosition]})), VoidTovoid()));
        }
      }
      this[_state$] = force_press._ForceState.ready;
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
      this.didStopTrackingLastPointer(pointer);
    }
    static _inverseLerp(min, max, t) {
      if (!(dart.notNull(min) <= dart.notNull(max))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 351, 12, "min <= max");
      let value = (dart.notNull(t) - dart.notNull(min)) / (dart.notNull(max) - dart.notNull(min));
      if (!value[$isNaN]) value = value[$clamp](0.0, 1.0);
      return value;
    }
    get debugDescription() {
      return "force press";
    }
  };
  (force_press.ForcePressGestureRecognizer.new = function(opts) {
    let startPressure = opts && 'startPressure' in opts ? opts.startPressure : 0.4;
    let peakPressure = opts && 'peakPressure' in opts ? opts.peakPressure : 0.85;
    let interpolation = opts && 'interpolation' in opts ? opts.interpolation : C47 || CT.C47;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onStart$] = null;
    this[onUpdate$] = null;
    this[onPeak] = null;
    this[onEnd$] = null;
    this[_lastPosition] = null;
    this[_lastPressure] = null;
    this[_state$] = force_press._ForceState.ready;
    this[startPressure$] = startPressure;
    this[peakPressure$] = peakPressure;
    this[interpolation$] = interpolation;
    if (!(startPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 131, 16, "startPressure != null");
    if (!(peakPressure != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 132, 16, "peakPressure != null");
    if (!(interpolation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 133, 16, "interpolation != null");
    if (!(dart.notNull(peakPressure) > dart.notNull(startPressure))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/force_press.dart", 134, 16, "peakPressure > startPressure");
    force_press.ForcePressGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = force_press.ForcePressGestureRecognizer.prototype;
  dart.addTypeTests(force_press.ForcePressGestureRecognizer);
  const onStart$ = Symbol("ForcePressGestureRecognizer.onStart");
  const onUpdate$ = Symbol("ForcePressGestureRecognizer.onUpdate");
  const onPeak = Symbol("ForcePressGestureRecognizer.onPeak");
  const onEnd$ = Symbol("ForcePressGestureRecognizer.onEnd");
  const startPressure$ = Symbol("ForcePressGestureRecognizer.startPressure");
  const peakPressure$ = Symbol("ForcePressGestureRecognizer.peakPressure");
  const interpolation$ = Symbol("ForcePressGestureRecognizer.interpolation");
  dart.setMethodSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getMethods(force_press.ForcePressGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getGetters(force_press.ForcePressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(force_press.ForcePressGestureRecognizer, "package:flutter_web/src/gestures/force_press.dart");
  dart.setFieldSignature(force_press.ForcePressGestureRecognizer, () => ({
    __proto__: dart.getFields(force_press.ForcePressGestureRecognizer.__proto__),
    onStart: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onPeak: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [force_press.ForcePressDetails])),
    startPressure: dart.finalFieldType(core.double),
    peakPressure: dart.finalFieldType(core.double),
    interpolation: dart.finalFieldType(dart.fnType(core.double, [core.double, core.double, core.double])),
    [_lastPosition]: dart.fieldType(ui.Offset),
    [_lastPressure]: dart.fieldType(core.double),
    [_state$]: dart.fieldType(force_press._ForceState)
  }));
  mouse_tracking.MouseTrackerAnnotation = class MouseTrackerAnnotation extends core.Object {
    get onEnter() {
      return this[onEnter$];
    }
    set onEnter(value) {
      super.onEnter = value;
    }
    get onHover() {
      return this[onHover$];
    }
    set onHover(value) {
      super.onHover = value;
    }
    get onExit() {
      return this[onExit$];
    }
    set onExit(value) {
      super.onExit = value;
    }
    toString() {
      let none = this.onEnter == null && this.onExit == null && this.onHover == null ? " <none>" : "";
      return "[" + dart.str(this[$runtimeType]) + this[$hashCode][$toRadixString](16) + none + (this.onEnter == null ? "" : " onEnter") + (this.onHover == null ? "" : " onHover") + (this.onExit == null ? "" : " onExit") + "]";
    }
  };
  (mouse_tracking.MouseTrackerAnnotation.new = function(opts) {
    let onEnter = opts && 'onEnter' in opts ? opts.onEnter : null;
    let onHover = opts && 'onHover' in opts ? opts.onHover : null;
    let onExit = opts && 'onExit' in opts ? opts.onExit : null;
    this[onEnter$] = onEnter;
    this[onHover$] = onHover;
    this[onExit$] = onExit;
    ;
  }).prototype = mouse_tracking.MouseTrackerAnnotation.prototype;
  dart.addTypeTests(mouse_tracking.MouseTrackerAnnotation);
  const onEnter$ = Symbol("MouseTrackerAnnotation.onEnter");
  const onHover$ = Symbol("MouseTrackerAnnotation.onHover");
  const onExit$ = Symbol("MouseTrackerAnnotation.onExit");
  dart.setLibraryUri(mouse_tracking.MouseTrackerAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(mouse_tracking.MouseTrackerAnnotation, () => ({
    __proto__: dart.getFields(mouse_tracking.MouseTrackerAnnotation.__proto__),
    onEnter: dart.finalFieldType(dart.fnType(dart.void, [events.PointerEnterEvent])),
    onHover: dart.finalFieldType(dart.fnType(dart.void, [events.PointerHoverEvent])),
    onExit: dart.finalFieldType(dart.fnType(dart.void, [events.PointerExitEvent]))
  }));
  dart.defineExtensionMethods(mouse_tracking.MouseTrackerAnnotation, ['toString']);
  mouse_tracking._TrackedAnnotation = class _TrackedAnnotation extends core.Object {};
  (mouse_tracking._TrackedAnnotation.new = function(annotation) {
    this.activeDevices = LinkedHashSetOfint().new();
    this.annotation = annotation;
    ;
  }).prototype = mouse_tracking._TrackedAnnotation.prototype;
  dart.addTypeTests(mouse_tracking._TrackedAnnotation);
  dart.setLibraryUri(mouse_tracking._TrackedAnnotation, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(mouse_tracking._TrackedAnnotation, () => ({
    __proto__: dart.getFields(mouse_tracking._TrackedAnnotation.__proto__),
    annotation: dart.finalFieldType(mouse_tracking.MouseTrackerAnnotation),
    activeDevices: dart.fieldType(core.Set$(core.int))
  }));
  const _trackedAnnotations = dart.privateName(mouse_tracking, "_trackedAnnotations");
  const _postFrameCheckScheduled = dart.privateName(mouse_tracking, "_postFrameCheckScheduled");
  const _lastMouseEvent = dart.privateName(mouse_tracking, "_lastMouseEvent");
  const _handleEvent = dart.privateName(mouse_tracking, "_handleEvent");
  const _scheduleMousePositionCheck = dart.privateName(mouse_tracking, "_scheduleMousePositionCheck");
  const _findAnnotation = dart.privateName(mouse_tracking, "_findAnnotation");
  const _addMouseEvent = dart.privateName(mouse_tracking, "_addMouseEvent");
  const _removeMouseEvent = dart.privateName(mouse_tracking, "_removeMouseEvent");
  mouse_tracking.MouseTracker = class MouseTracker extends change_notifier.ChangeNotifier {
    get annotationFinder() {
      return this[annotationFinder$];
    }
    set annotationFinder(value) {
      super.annotationFinder = value;
    }
    attachAnnotation(annotation) {
      this[_trackedAnnotations][$_set](annotation, new mouse_tracking._TrackedAnnotation.new(annotation));
      this[_scheduleMousePositionCheck]();
    }
    detachAnnotation(annotation) {
      let trackedAnnotation = this[_findAnnotation](annotation);
      for (let deviceId of trackedAnnotation.activeDevices) {
        if (annotation.onExit != null) {
          annotation.onExit(new events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
        }
      }
      this[_trackedAnnotations][$remove](annotation);
    }
    [_scheduleMousePositionCheck]() {
      if (dart.test(this[_trackedAnnotations][$isNotEmpty]) && !dart.test(this[_postFrameCheckScheduled])) {
        this[_postFrameCheckScheduled] = true;
        binding$.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => {
          this[_postFrameCheckScheduled] = false;
          this.collectMousePositions();
        }, DurationToNull()));
        binding$.SchedulerBinding.instance.scheduleFrame();
      }
    }
    [_handleEvent](event) {
      if (!dart.equals(event.kind, ui.PointerDeviceKind.mouse)) {
        return;
      }
      let deviceId = event.device;
      if (events.PointerAddedEvent.is(event)) {
        this[_addMouseEvent](deviceId, event);
        return;
      }
      if (events.PointerRemovedEvent.is(event)) {
        this[_removeMouseEvent](deviceId);
        this[_scheduleMousePositionCheck]();
      } else {
        if (events.PointerMoveEvent.is(event) || events.PointerHoverEvent.is(event) || events.PointerDownEvent.is(event)) {
          if (!dart.test(this[_lastMouseEvent][$containsKey](deviceId)) || !dart.equals(this[_lastMouseEvent][$_get](deviceId).position, event.position)) {
            this[_scheduleMousePositionCheck]();
          }
          this[_addMouseEvent](deviceId, event);
        }
      }
    }
    [_findAnnotation](annotation) {
      let trackedAnnotation = this[_trackedAnnotations][$_get](annotation);
      if (!(trackedAnnotation != null)) dart.assertFailed("Unable to find annotation " + dart.str(annotation) + " in tracked annotations. " + "Check that attachAnnotation has been called for all annotated layers.", "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 189, 9, "trackedAnnotation != null");
      return trackedAnnotation;
    }
    isAnnotationAttached(annotation) {
      return this[_trackedAnnotations][$containsKey](annotation);
    }
    collectMousePositions() {
      let t5, t5$, t5$0;
      const exitAnnotation = (trackedAnnotation, deviceId) => {
        let t5;
        if ((t5 = trackedAnnotation.annotation, t5 == null ? null : t5.onExit) != null && dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
          trackedAnnotation.annotation.onExit(new events.PointerExitEvent.fromMouseEvent(this[_lastMouseEvent][$_get](deviceId)));
          trackedAnnotation.activeDevices.remove(deviceId);
        }
      };
      dart.fn(exitAnnotation, _TrackedAnnotationAndintTovoid());
      function exitAllDevices(trackedAnnotation) {
        if (dart.test(trackedAnnotation.activeDevices[$isNotEmpty])) {
          let deviceIds = trackedAnnotation.activeDevices.toSet();
          for (let deviceId of deviceIds) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
        }
      }
      dart.fn(exitAllDevices, _TrackedAnnotationTovoid());
      if (!dart.test(this.mouseIsConnected)) {
        this[_trackedAnnotations][$values][$forEach](exitAllDevices);
        return;
      }
      for (let deviceId of this[_lastMouseEvent][$keys]) {
        let lastEvent = this[_lastMouseEvent][$_get](deviceId);
        let hits = this.annotationFinder(lastEvent.position);
        if (dart.test(hits[$isEmpty])) {
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            exitAnnotation(trackedAnnotation, deviceId);
          }
          continue;
        }
        let hitAnnotations = hits[$map](mouse_tracking._TrackedAnnotation, dart.fn(hit => this[_findAnnotation](hit), MouseTrackerAnnotationTo_TrackedAnnotation()))[$toSet]();
        for (let hitAnnotation of hitAnnotations) {
          if (!dart.test(hitAnnotation.activeDevices.contains(deviceId))) {
            hitAnnotation.activeDevices.add(deviceId);
            if ((t5 = hitAnnotation.annotation, t5 == null ? null : t5.onEnter) != null) {
              hitAnnotation.annotation.onEnter(new events.PointerEnterEvent.fromMouseEvent(lastEvent));
            }
          }
          if ((t5$ = hitAnnotation.annotation, t5$ == null ? null : t5$.onHover) != null && events.PointerHoverEvent.is(lastEvent)) {
            hitAnnotation.annotation.onHover(lastEvent);
          }
          for (let trackedAnnotation of this[_trackedAnnotations][$values]) {
            if (dart.test(hitAnnotations.contains(trackedAnnotation))) {
              continue;
            }
            if (dart.test(trackedAnnotation.activeDevices.contains(deviceId))) {
              if ((t5$0 = trackedAnnotation.annotation, t5$0 == null ? null : t5$0.onExit) != null) {
                trackedAnnotation.annotation.onExit(new events.PointerExitEvent.fromMouseEvent(lastEvent));
              }
              trackedAnnotation.activeDevices.remove(deviceId);
            }
          }
        }
      }
    }
    [_addMouseEvent](deviceId, event) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$_set](deviceId, event);
      if (!dart.equals(this.mouseIsConnected, wasConnected)) {
        this.notifyListeners();
      }
    }
    [_removeMouseEvent](deviceId) {
      let wasConnected = this.mouseIsConnected;
      this[_lastMouseEvent][$remove](deviceId);
      if (!dart.equals(this.mouseIsConnected, wasConnected)) {
        this.notifyListeners();
      }
    }
    get mouseIsConnected() {
      return this[_lastMouseEvent][$isNotEmpty];
    }
  };
  (mouse_tracking.MouseTracker.new = function(router, annotationFinder) {
    this[_trackedAnnotations] = new (LinkedMapOfMouseTrackerAnnotation$_TrackedAnnotation()).new();
    this[_postFrameCheckScheduled] = false;
    this[_lastMouseEvent] = new (IdentityMapOfint$PointerEvent()).new();
    this[annotationFinder$] = annotationFinder;
    if (!(router != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 100, 16, "router != null");
    if (!(annotationFinder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/mouse_tracking.dart", 101, 16, "annotationFinder != null");
    mouse_tracking.MouseTracker.__proto__.new.call(this);
    router.addGlobalRoute(dart.bind(this, _handleEvent));
  }).prototype = mouse_tracking.MouseTracker.prototype;
  dart.addTypeTests(mouse_tracking.MouseTracker);
  const annotationFinder$ = Symbol("MouseTracker.annotationFinder");
  dart.setMethodSignature(mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getMethods(mouse_tracking.MouseTracker.__proto__),
    attachAnnotation: dart.fnType(dart.void, [mouse_tracking.MouseTrackerAnnotation]),
    detachAnnotation: dart.fnType(dart.void, [mouse_tracking.MouseTrackerAnnotation]),
    [_scheduleMousePositionCheck]: dart.fnType(dart.void, []),
    [_handleEvent]: dart.fnType(dart.void, [events.PointerEvent]),
    [_findAnnotation]: dart.fnType(mouse_tracking._TrackedAnnotation, [mouse_tracking.MouseTrackerAnnotation]),
    isAnnotationAttached: dart.fnType(core.bool, [mouse_tracking.MouseTrackerAnnotation]),
    collectMousePositions: dart.fnType(dart.void, []),
    [_addMouseEvent]: dart.fnType(dart.void, [core.int, events.PointerEvent]),
    [_removeMouseEvent]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getGetters(mouse_tracking.MouseTracker.__proto__),
    mouseIsConnected: core.bool
  }));
  dart.setLibraryUri(mouse_tracking.MouseTracker, "package:flutter_web/src/gestures/mouse_tracking.dart");
  dart.setFieldSignature(mouse_tracking.MouseTracker, () => ({
    __proto__: dart.getFields(mouse_tracking.MouseTracker.__proto__),
    annotationFinder: dart.finalFieldType(dart.fnType(core.Iterable$(mouse_tracking.MouseTrackerAnnotation), [ui.Offset])),
    [_trackedAnnotations]: dart.finalFieldType(core.Map$(mouse_tracking.MouseTrackerAnnotation, mouse_tracking._TrackedAnnotation)),
    [_postFrameCheckScheduled]: dart.fieldType(core.bool),
    [_lastMouseEvent]: dart.finalFieldType(core.Map$(core.int, events.PointerEvent))
  }));
  drag$.Drag = class Drag extends core.Object {
    update(details) {
    }
    end(details) {
    }
    cancel() {
    }
  };
  (drag$.Drag.new = function() {
    ;
  }).prototype = drag$.Drag.prototype;
  dart.addTypeTests(drag$.Drag);
  dart.setMethodSignature(drag$.Drag, () => ({
    __proto__: dart.getMethods(drag$.Drag.__proto__),
    update: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    end: dart.fnType(dart.void, [drag_details.DragEndDetails]),
    cancel: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(drag$.Drag, "package:flutter_web/src/gestures/drag.dart");
  drag_details.DragDownDetails = class DragDownDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$2];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragDownDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    this[globalPosition$2] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 24, 16, "globalPosition != null");
    ;
  }).prototype = drag_details.DragDownDetails.prototype;
  dart.addTypeTests(drag_details.DragDownDetails);
  const globalPosition$2 = Symbol("DragDownDetails.globalPosition");
  dart.setLibraryUri(drag_details.DragDownDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragDownDetails, () => ({
    __proto__: dart.getFields(drag_details.DragDownDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragDownDetails, ['toString']);
  drag_details.DragStartDetails = class DragStartDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get globalPosition() {
      return this[globalPosition$3];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.globalPosition) + ")";
    }
  };
  (drag_details.DragStartDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    this[sourceTimeStamp$] = sourceTimeStamp;
    this[globalPosition$3] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 56, 16, "globalPosition != null");
    ;
  }).prototype = drag_details.DragStartDetails.prototype;
  dart.addTypeTests(drag_details.DragStartDetails);
  const sourceTimeStamp$ = Symbol("DragStartDetails.sourceTimeStamp");
  const globalPosition$3 = Symbol("DragStartDetails.globalPosition");
  dart.setLibraryUri(drag_details.DragStartDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragStartDetails, () => ({
    __proto__: dart.getFields(drag_details.DragStartDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragStartDetails, ['toString']);
  drag_details.DragUpdateDetails = class DragUpdateDetails extends core.Object {
    get sourceTimeStamp() {
      return this[sourceTimeStamp$0];
    }
    set sourceTimeStamp(value) {
      super.sourceTimeStamp = value;
    }
    get delta() {
      return this[delta$0];
    }
    set delta(value) {
      super.delta = value;
    }
    get primaryDelta() {
      return this[primaryDelta$];
    }
    set primaryDelta(value) {
      super.primaryDelta = value;
    }
    get globalPosition() {
      return this[globalPosition$4];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.delta) + ")";
    }
  };
  (drag_details.DragUpdateDetails.new = function(opts) {
    let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
    let delta = opts && 'delta' in opts ? opts.delta : C5 || CT.C5;
    let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
    this[sourceTimeStamp$0] = sourceTimeStamp;
    this[delta$0] = delta;
    this[primaryDelta$] = primaryDelta;
    this[globalPosition$4] = globalPosition;
    if (!(delta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 107, 16, "delta != null");
    if (!(primaryDelta == null || primaryDelta == delta.dx && delta.dy === 0.0 || primaryDelta == delta.dy && delta.dx === 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 108, 16, "primaryDelta == null ||\r\n            (primaryDelta == delta.dx && delta.dy == 0.0) ||\r\n            (primaryDelta == delta.dy && delta.dx == 0.0)");
    ;
  }).prototype = drag_details.DragUpdateDetails.prototype;
  dart.addTypeTests(drag_details.DragUpdateDetails);
  const sourceTimeStamp$0 = Symbol("DragUpdateDetails.sourceTimeStamp");
  const delta$0 = Symbol("DragUpdateDetails.delta");
  const primaryDelta$ = Symbol("DragUpdateDetails.primaryDelta");
  const globalPosition$4 = Symbol("DragUpdateDetails.globalPosition");
  dart.setLibraryUri(drag_details.DragUpdateDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragUpdateDetails, () => ({
    __proto__: dart.getFields(drag_details.DragUpdateDetails.__proto__),
    sourceTimeStamp: dart.finalFieldType(core.Duration),
    delta: dart.finalFieldType(ui.Offset),
    primaryDelta: dart.finalFieldType(core.double),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  dart.defineExtensionMethods(drag_details.DragUpdateDetails, ['toString']);
  drag_details.DragEndDetails = class DragEndDetails extends core.Object {
    get velocity() {
      return this[velocity$0];
    }
    set velocity(value) {
      super.velocity = value;
    }
    get primaryVelocity() {
      return this[primaryVelocity$];
    }
    set primaryVelocity(value) {
      super.primaryVelocity = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.velocity) + ")";
    }
  };
  (drag_details.DragEndDetails.new = function(opts) {
    let velocity = opts && 'velocity' in opts ? opts.velocity : C12 || CT.C12;
    let primaryVelocity = opts && 'primaryVelocity' in opts ? opts.primaryVelocity : null;
    this[velocity$0] = velocity;
    this[primaryVelocity$] = primaryVelocity;
    if (!(velocity != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 170, 16, "velocity != null");
    if (!(primaryVelocity == null || primaryVelocity == velocity.pixelsPerSecond.dx || primaryVelocity == velocity.pixelsPerSecond.dy)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/drag_details.dart", 171, 16, "primaryVelocity == null ||\r\n            primaryVelocity == velocity.pixelsPerSecond.dx ||\r\n            primaryVelocity == velocity.pixelsPerSecond.dy");
    ;
  }).prototype = drag_details.DragEndDetails.prototype;
  dart.addTypeTests(drag_details.DragEndDetails);
  const velocity$0 = Symbol("DragEndDetails.velocity");
  const primaryVelocity$ = Symbol("DragEndDetails.primaryVelocity");
  dart.setLibraryUri(drag_details.DragEndDetails, "package:flutter_web/src/gestures/drag_details.dart");
  dart.setFieldSignature(drag_details.DragEndDetails, () => ({
    __proto__: dart.getFields(drag_details.DragEndDetails.__proto__),
    velocity: dart.finalFieldType(velocity_tracker.Velocity),
    primaryVelocity: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(drag_details.DragEndDetails, ['toString']);
  long_press.LongPressStartDetails = class LongPressStartDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$5];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (long_press.LongPressStartDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    this[globalPosition$5] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 59, 16, "globalPosition != null");
    ;
  }).prototype = long_press.LongPressStartDetails.prototype;
  dart.addTypeTests(long_press.LongPressStartDetails);
  const globalPosition$5 = Symbol("LongPressStartDetails.globalPosition");
  dart.setLibraryUri(long_press.LongPressStartDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressStartDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressStartDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  long_press.LongPressMoveUpdateDetails = class LongPressMoveUpdateDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$6];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
    get offsetFromOrigin() {
      return this[offsetFromOrigin$];
    }
    set offsetFromOrigin(value) {
      super.offsetFromOrigin = value;
    }
  };
  (long_press.LongPressMoveUpdateDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    let offsetFromOrigin = opts && 'offsetFromOrigin' in opts ? opts.offsetFromOrigin : C5 || CT.C5;
    this[globalPosition$6] = globalPosition;
    this[offsetFromOrigin$] = offsetFromOrigin;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 79, 16, "globalPosition != null");
    if (!(offsetFromOrigin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 80, 16, "offsetFromOrigin != null");
    ;
  }).prototype = long_press.LongPressMoveUpdateDetails.prototype;
  dart.addTypeTests(long_press.LongPressMoveUpdateDetails);
  const globalPosition$6 = Symbol("LongPressMoveUpdateDetails.globalPosition");
  const offsetFromOrigin$ = Symbol("LongPressMoveUpdateDetails.offsetFromOrigin");
  dart.setLibraryUri(long_press.LongPressMoveUpdateDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressMoveUpdateDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressMoveUpdateDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset),
    offsetFromOrigin: dart.finalFieldType(ui.Offset)
  }));
  long_press.LongPressEndDetails = class LongPressEndDetails extends core.Object {
    get globalPosition() {
      return this[globalPosition$7];
    }
    set globalPosition(value) {
      super.globalPosition = value;
    }
  };
  (long_press.LongPressEndDetails.new = function(opts) {
    let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : C5 || CT.C5;
    this[globalPosition$7] = globalPosition;
    if (!(globalPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 103, 16, "globalPosition != null");
    ;
  }).prototype = long_press.LongPressEndDetails.prototype;
  dart.addTypeTests(long_press.LongPressEndDetails);
  const globalPosition$7 = Symbol("LongPressEndDetails.globalPosition");
  dart.setLibraryUri(long_press.LongPressEndDetails, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressEndDetails, () => ({
    __proto__: dart.getFields(long_press.LongPressEndDetails.__proto__),
    globalPosition: dart.finalFieldType(ui.Offset)
  }));
  const _longPressAccepted = dart.privateName(long_press, "_longPressAccepted");
  const _longPressOrigin = dart.privateName(long_press, "_longPressOrigin");
  const _initialButtons$ = dart.privateName(long_press, "_initialButtons");
  const _checkLongPressStart = dart.privateName(long_press, "_checkLongPressStart");
  const _checkLongPressEnd = dart.privateName(long_press, "_checkLongPressEnd");
  const _reset$ = dart.privateName(long_press, "_reset");
  const _checkLongPressMoveUpdate = dart.privateName(long_press, "_checkLongPressMoveUpdate");
  long_press.LongPressGestureRecognizer = class LongPressGestureRecognizer extends recognizer.PrimaryPointerGestureRecognizer {
    get onLongPress() {
      return this[onLongPress];
    }
    set onLongPress(value) {
      this[onLongPress] = value;
    }
    get onLongPressStart() {
      return this[onLongPressStart];
    }
    set onLongPressStart(value) {
      this[onLongPressStart] = value;
    }
    get onLongPressMoveUpdate() {
      return this[onLongPressMoveUpdate];
    }
    set onLongPressMoveUpdate(value) {
      this[onLongPressMoveUpdate] = value;
    }
    get onLongPressUp() {
      return this[onLongPressUp];
    }
    set onLongPressUp(value) {
      this[onLongPressUp] = value;
    }
    get onLongPressEnd() {
      return this[onLongPressEnd];
    }
    set onLongPressEnd(value) {
      this[onLongPressEnd] = value;
    }
    isPointerAllowed(event) {
      switch (event.buttons) {
        case 1:
        {
          if (this.onLongPressStart == null && this.onLongPress == null && this.onLongPressMoveUpdate == null && this.onLongPressEnd == null && this.onLongPressUp == null) return false;
          break;
        }
        default:
        {
          return false;
        }
      }
      return super.isPointerAllowed(event);
    }
    didExceedDeadline() {
      this.resolve(arena.GestureDisposition.accepted);
      this[_longPressAccepted] = true;
      super.acceptGesture(this.primaryPointer);
      this[_checkLongPressStart]();
    }
    handlePrimaryPointer(event) {
      if (events.PointerUpEvent.is(event)) {
        if (dart.equals(this[_longPressAccepted], true)) {
          this[_checkLongPressEnd](event);
        } else {
          this.resolve(arena.GestureDisposition.rejected);
        }
        this[_reset$]();
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reset$]();
      } else if (events.PointerDownEvent.is(event)) {
        this[_longPressOrigin] = event.position;
        this[_initialButtons$] = event.buttons;
      } else if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(this.primaryPointer);
        } else if (dart.test(this[_longPressAccepted])) {
          this[_checkLongPressMoveUpdate](event);
        }
      }
    }
    [_checkLongPressStart]() {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 249, 12, "_initialButtons == kPrimaryButton");
      let details = new long_press.LongPressStartDetails.new({globalPosition: this[_longPressOrigin]});
      if (this.onLongPressStart != null) this.invokeCallback(dart.void, "onLongPressStart", dart.fn(() => this.onLongPressStart(details), VoidTovoid()));
      if (this.onLongPress != null) this.invokeCallback(dart.void, "onLongPress", this.onLongPress);
    }
    [_checkLongPressMoveUpdate](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 259, 12, "_initialButtons == kPrimaryButton");
      let details = new long_press.LongPressMoveUpdateDetails.new({globalPosition: event.position, offsetFromOrigin: event.position['-'](this[_longPressOrigin])});
      if (this.onLongPressMoveUpdate != null) this.invokeCallback(dart.void, "onLongPressMoveUpdate", dart.fn(() => this.onLongPressMoveUpdate(details), VoidTovoid()));
    }
    [_checkLongPressEnd](event) {
      if (!(this[_initialButtons$] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/long_press.dart", 270, 12, "_initialButtons == kPrimaryButton");
      let details = new long_press.LongPressEndDetails.new({globalPosition: event.position});
      if (this.onLongPressEnd != null) this.invokeCallback(dart.void, "onLongPressEnd", dart.fn(() => this.onLongPressEnd(details), VoidTovoid()));
      if (this.onLongPressUp != null) this.invokeCallback(dart.void, "onLongPressUp", this.onLongPressUp);
    }
    [_reset$]() {
      this[_longPressAccepted] = false;
      this[_longPressOrigin] = null;
      this[_initialButtons$] = null;
    }
    resolve(disposition) {
      if (dart.test(this[_longPressAccepted]) && dart.equals(disposition, arena.GestureDisposition.rejected)) {
        this[_reset$]();
      }
      super.resolve(disposition);
    }
    acceptGesture(pointer) {
    }
    get debugDescription() {
      return "long press";
    }
  };
  (long_press.LongPressGestureRecognizer.new = function(opts) {
    let postAcceptSlopTolerance = opts && 'postAcceptSlopTolerance' in opts ? opts.postAcceptSlopTolerance : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    this[_longPressAccepted] = false;
    this[_longPressOrigin] = null;
    this[_initialButtons$] = null;
    this[onLongPress] = null;
    this[onLongPressStart] = null;
    this[onLongPressMoveUpdate] = null;
    this[onLongPressUp] = null;
    this[onLongPressEnd] = null;
    long_press.LongPressGestureRecognizer.__proto__.new.call(this, {deadline: constants.kLongPressTimeout, postAcceptSlopTolerance: postAcceptSlopTolerance, kind: kind, debugOwner: debugOwner});
    ;
  }).prototype = long_press.LongPressGestureRecognizer.prototype;
  dart.addTypeTests(long_press.LongPressGestureRecognizer);
  const onLongPress = Symbol("LongPressGestureRecognizer.onLongPress");
  const onLongPressStart = Symbol("LongPressGestureRecognizer.onLongPressStart");
  const onLongPressMoveUpdate = Symbol("LongPressGestureRecognizer.onLongPressMoveUpdate");
  const onLongPressUp = Symbol("LongPressGestureRecognizer.onLongPressUp");
  const onLongPressEnd = Symbol("LongPressGestureRecognizer.onLongPressEnd");
  dart.setMethodSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getMethods(long_press.LongPressGestureRecognizer.__proto__),
    handlePrimaryPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressStart]: dart.fnType(dart.void, []),
    [_checkLongPressMoveUpdate]: dart.fnType(dart.void, [events.PointerEvent]),
    [_checkLongPressEnd]: dart.fnType(dart.void, [events.PointerEvent]),
    [_reset$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getGetters(long_press.LongPressGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(long_press.LongPressGestureRecognizer, "package:flutter_web/src/gestures/long_press.dart");
  dart.setFieldSignature(long_press.LongPressGestureRecognizer, () => ({
    __proto__: dart.getFields(long_press.LongPressGestureRecognizer.__proto__),
    [_longPressAccepted]: dart.fieldType(core.bool),
    [_longPressOrigin]: dart.fieldType(ui.Offset),
    [_initialButtons$]: dart.fieldType(core.int),
    onLongPress: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressStart: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressStartDetails])),
    onLongPressMoveUpdate: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails])),
    onLongPressUp: dart.fieldType(dart.fnType(dart.void, [])),
    onLongPressEnd: dart.fieldType(dart.fnType(dart.void, [long_press.LongPressEndDetails]))
  }));
  const _velocityTracker = dart.privateName(multidrag, "_velocityTracker");
  const _client = dart.privateName(multidrag, "_client");
  const _pendingDelta = dart.privateName(multidrag, "_pendingDelta");
  const _lastPendingEventTimestamp = dart.privateName(multidrag, "_lastPendingEventTimestamp");
  const _arenaEntry = dart.privateName(multidrag, "_arenaEntry");
  const _setArenaEntry = dart.privateName(multidrag, "_setArenaEntry");
  const _move = dart.privateName(multidrag, "_move");
  const _startDrag = dart.privateName(multidrag, "_startDrag");
  const _up = dart.privateName(multidrag, "_up");
  const _cancel = dart.privateName(multidrag, "_cancel");
  multidrag.MultiDragPointerState = class MultiDragPointerState extends core.Object {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get pendingDelta() {
      return this[_pendingDelta];
    }
    [_setArenaEntry](entry) {
      if (!(this[_arenaEntry] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 51, 12, "_arenaEntry == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 52, 12, "pendingDelta != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 53, 12, "_client == null");
      this[_arenaEntry] = entry;
    }
    resolve(disposition) {
      this[_arenaEntry].resolve(disposition);
    }
    [_move](event) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 65, 12, "_arenaEntry != null");
      if (!dart.test(event.synthesized)) this[_velocityTracker].addPosition(event.timeStamp, event.position);
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 69, 14, "pendingDelta == null");
        this[_client].update(new drag_details.DragUpdateDetails.new({sourceTimeStamp: event.timeStamp, delta: event.delta, globalPosition: event.position}));
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 77, 14, "pendingDelta != null");
        this[_pendingDelta] = this[_pendingDelta]['+'](event.delta);
        this[_lastPendingEventTimestamp] = event.timeStamp;
        this.checkForResolutionAfterMove();
      }
    }
    checkForResolutionAfterMove() {
    }
    rejected() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 103, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 104, 12, "_client == null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 105, 12, "pendingDelta != null");
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_arenaEntry] = null;
    }
    [_startDrag](client) {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 112, 12, "_arenaEntry != null");
      if (!(this[_client] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 113, 12, "_client == null");
      if (!(client != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 114, 12, "client != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 115, 12, "pendingDelta != null");
      this[_client] = client;
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: this[_lastPendingEventTimestamp], delta: this.pendingDelta, globalPosition: this.initialPosition});
      this[_pendingDelta] = null;
      this[_lastPendingEventTimestamp] = null;
      this[_client].update(details);
    }
    [_up]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 129, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 131, 14, "pendingDelta == null");
        let details = new drag_details.DragEndDetails.new({velocity: this[_velocityTracker].getVelocity()});
        let client = this[_client];
        this[_client] = null;
        client.end(details);
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 139, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    [_cancel]() {
      if (!(this[_arenaEntry] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 146, 12, "_arenaEntry != null");
      if (this[_client] != null) {
        if (!(this.pendingDelta == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 148, 14, "pendingDelta == null");
        let client = this[_client];
        this[_client] = null;
        client.cancel();
      } else {
        if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 154, 14, "pendingDelta != null");
        this[_pendingDelta] = null;
        this[_lastPendingEventTimestamp] = null;
      }
    }
    dispose() {
      let t5;
      t5 = this[_arenaEntry];
      t5 == null ? null : t5.resolve(arena.GestureDisposition.rejected);
      this[_arenaEntry] = null;
      if (!dart.test(dart.fn(() => {
        this[_pendingDelta] = null;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 166, 12, "() {\r\n      _pendingDelta = null;\r\n      return true;\r\n    }()");
    }
  };
  (multidrag.MultiDragPointerState.new = function(initialPosition) {
    this[_velocityTracker] = new velocity_tracker.VelocityTracker.new();
    this[_client] = null;
    this[_pendingDelta] = ui.Offset.zero;
    this[_lastPendingEventTimestamp] = null;
    this[_arenaEntry] = null;
    this[initialPosition$] = initialPosition;
    if (!(initialPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 30, 56, "initialPosition != null");
    ;
  }).prototype = multidrag.MultiDragPointerState.prototype;
  dart.addTypeTests(multidrag.MultiDragPointerState);
  const initialPosition$ = Symbol("MultiDragPointerState.initialPosition");
  dart.setMethodSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getMethods(multidrag.MultiDragPointerState.__proto__),
    [_setArenaEntry]: dart.fnType(dart.void, [arena.GestureArenaEntry]),
    resolve: dart.fnType(dart.void, [arena.GestureDisposition]),
    [_move]: dart.fnType(dart.void, [events.PointerMoveEvent]),
    checkForResolutionAfterMove: dart.fnType(dart.void, []),
    rejected: dart.fnType(dart.void, []),
    [_startDrag]: dart.fnType(dart.void, [drag$.Drag]),
    [_up]: dart.fnType(dart.void, []),
    [_cancel]: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getGetters(multidrag.MultiDragPointerState.__proto__),
    pendingDelta: ui.Offset
  }));
  dart.setLibraryUri(multidrag.MultiDragPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.MultiDragPointerState, () => ({
    __proto__: dart.getFields(multidrag.MultiDragPointerState.__proto__),
    initialPosition: dart.finalFieldType(ui.Offset),
    [_velocityTracker]: dart.finalFieldType(velocity_tracker.VelocityTracker),
    [_client]: dart.fieldType(drag$.Drag),
    [_pendingDelta]: dart.fieldType(ui.Offset),
    [_lastPendingEventTimestamp]: dart.fieldType(core.Duration),
    [_arenaEntry]: dart.fieldType(arena.GestureArenaEntry)
  }));
  const _pointers = dart.privateName(multidrag, "_pointers");
  const _handleEvent$ = dart.privateName(multidrag, "_handleEvent");
  const _removeState = dart.privateName(multidrag, "_removeState");
  const _is_MultiDragGestureRecognizer_default = Symbol('_is_MultiDragGestureRecognizer_default');
  multidrag.MultiDragGestureRecognizer$ = dart.generic(T => {
    let IdentityMapOfint$T = () => (IdentityMapOfint$T = dart.constFn(_js_helper.IdentityMap$(core.int, T)))();
    class MultiDragGestureRecognizer extends recognizer.GestureRecognizer {
      get onStart() {
        return this[onStart];
      }
      set onStart(value) {
        this[onStart] = value;
      }
      addAllowedPointer(event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 211, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 212, 12, "event.pointer != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 213, 12, "event.position != null");
        if (!!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 214, 12, "!_pointers.containsKey(event.pointer)");
        let state = this.createNewPointerState(event);
        this[_pointers][$_set](event.pointer, state);
        binding$0.GestureBinding.instance.pointerRouter.addRoute(event.pointer, dart.bind(this, _handleEvent$));
        state[_setArenaEntry](binding$0.GestureBinding.instance.gestureArena.add(event.pointer, this));
      }
      [_handleEvent$](event) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 228, 12, "_pointers != null");
        if (!(event.pointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 229, 12, "event.pointer != null");
        if (!(event.timeStamp != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 230, 12, "event.timeStamp != null");
        if (!(event.position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 231, 12, "event.position != null");
        if (!dart.test(this[_pointers][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 232, 12, "_pointers.containsKey(event.pointer)");
        let state = this[_pointers][$_get](event.pointer);
        if (events.PointerMoveEvent.is(event)) {
          state[_move](event);
        } else if (events.PointerUpEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 238, 14, "event.delta == Offset.zero");
          state[_up]();
          this[_removeState](event.pointer);
        } else if (events.PointerCancelEvent.is(event)) {
          if (!dart.equals(event.delta, ui.Offset.zero)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 243, 14, "event.delta == Offset.zero");
          state[_cancel]();
          this[_removeState](event.pointer);
        } else if (!events.PointerDownEvent.is(event)) {
          if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 251, 14, "false");
        }
      }
      acceptGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 257, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (state == null) return;
        state.accepted(dart.fn(initialPosition => this[_startDrag](initialPosition, pointer), OffsetToDrag()));
      }
      [_startDrag](initialPosition, pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 266, 12, "_pointers != null");
        let state = this[_pointers][$_get](pointer);
        if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 268, 12, "state != null");
        if (!(state[_pendingDelta] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 269, 12, "state._pendingDelta != null");
        let drag = null;
        if (this.onStart != null) drag = this.invokeCallback(drag$.Drag, "onStart", dart.fn(() => this.onStart(initialPosition), VoidToDrag()));
        if (drag != null) {
          state[_startDrag](drag);
        } else {
          this[_removeState](pointer);
        }
        return drag;
      }
      rejectGesture(pointer) {
        if (!(this[_pointers] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 283, 12, "_pointers != null");
        if (dart.test(this[_pointers][$containsKey](pointer))) {
          let state = this[_pointers][$_get](pointer);
          if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 286, 14, "state != null");
          state.rejected();
          this[_removeState](pointer);
        }
      }
      [_removeState](pointer) {
        if (this[_pointers] == null) {
          return;
        }
        if (!dart.test(this[_pointers][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 298, 12, "_pointers.containsKey(pointer)");
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(pointer, dart.bind(this, _handleEvent$));
        this[_pointers][$remove](pointer).dispose();
      }
      dispose() {
        this[_pointers][$keys][$toList]()[$forEach](dart.bind(this, _removeState));
        if (!dart.test(this[_pointers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 306, 12, "_pointers.isEmpty");
        this[_pointers] = null;
        super.dispose();
      }
    }
    (MultiDragGestureRecognizer.new = function(opts) {
      let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
      let kind = opts && 'kind' in opts ? opts.kind : null;
      this[onStart] = null;
      this[_pointers] = new (IdentityMapOfint$T()).new();
      MultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
      ;
    }).prototype = MultiDragGestureRecognizer.prototype;
    dart.addTypeTests(MultiDragGestureRecognizer);
    MultiDragGestureRecognizer.prototype[_is_MultiDragGestureRecognizer_default] = true;
    const onStart = Symbol("MultiDragGestureRecognizer.onStart");
    dart.setMethodSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getMethods(MultiDragGestureRecognizer.__proto__),
      [_handleEvent$]: dart.fnType(dart.void, [events.PointerEvent]),
      acceptGesture: dart.fnType(dart.void, [core.int]),
      [_startDrag]: dart.fnType(drag$.Drag, [ui.Offset, core.int]),
      rejectGesture: dart.fnType(dart.void, [core.int]),
      [_removeState]: dart.fnType(dart.void, [core.int])
    }));
    dart.setLibraryUri(MultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
    dart.setFieldSignature(MultiDragGestureRecognizer, () => ({
      __proto__: dart.getFields(MultiDragGestureRecognizer.__proto__),
      onStart: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset])),
      [_pointers]: dart.fieldType(core.Map$(core.int, T))
    }));
    return MultiDragGestureRecognizer;
  });
  multidrag.MultiDragGestureRecognizer = multidrag.MultiDragGestureRecognizer$();
  dart.addTypeTests(multidrag.MultiDragGestureRecognizer, _is_MultiDragGestureRecognizer_default);
  multidrag._ImmediatePointerState = class _ImmediatePointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 317, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._ImmediatePointerState.new = function(initialPosition) {
    multidrag._ImmediatePointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._ImmediatePointerState.prototype;
  dart.addTypeTests(multidrag._ImmediatePointerState);
  dart.setMethodSignature(multidrag._ImmediatePointerState, () => ({
    __proto__: dart.getMethods(multidrag._ImmediatePointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._ImmediatePointerState, "package:flutter_web/src/gestures/multidrag.dart");
  multidrag.ImmediateMultiDragGestureRecognizer = class ImmediateMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._ImmediatePointerState) {
    createNewPointerState(event) {
      return new multidrag._ImmediatePointerState.new(event.position);
    }
    get debugDescription() {
      return "multidrag";
    }
  };
  (multidrag.ImmediateMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.ImmediateMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.ImmediateMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.ImmediateMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._ImmediatePointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.ImmediateMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.ImmediateMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.ImmediateMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  multidrag._HorizontalPointerState = class _HorizontalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 366, 12, "pendingDelta != null");
      if (this.pendingDelta.dx[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._HorizontalPointerState.new = function(initialPosition) {
    multidrag._HorizontalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._HorizontalPointerState.prototype;
  dart.addTypeTests(multidrag._HorizontalPointerState);
  dart.setMethodSignature(multidrag._HorizontalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._HorizontalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._HorizontalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  multidrag.HorizontalMultiDragGestureRecognizer = class HorizontalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._HorizontalPointerState) {
    createNewPointerState(event) {
      return new multidrag._HorizontalPointerState.new(event.position);
    }
    get debugDescription() {
      return "horizontal multidrag";
    }
  };
  (multidrag.HorizontalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.HorizontalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.HorizontalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.HorizontalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._HorizontalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.HorizontalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.HorizontalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.HorizontalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  multidrag._VerticalPointerState = class _VerticalPointerState extends multidrag.MultiDragPointerState {
    checkForResolutionAfterMove() {
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 415, 12, "pendingDelta != null");
      if (this.pendingDelta.dy[$abs]() > 18) this.resolve(arena.GestureDisposition.accepted);
    }
    accepted(starter) {
      starter(this.initialPosition);
    }
  };
  (multidrag._VerticalPointerState.new = function(initialPosition) {
    multidrag._VerticalPointerState.__proto__.new.call(this, initialPosition);
    ;
  }).prototype = multidrag._VerticalPointerState.prototype;
  dart.addTypeTests(multidrag._VerticalPointerState);
  dart.setMethodSignature(multidrag._VerticalPointerState, () => ({
    __proto__: dart.getMethods(multidrag._VerticalPointerState.__proto__),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._VerticalPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  multidrag.VerticalMultiDragGestureRecognizer = class VerticalMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._VerticalPointerState) {
    createNewPointerState(event) {
      return new multidrag._VerticalPointerState.new(event.position);
    }
    get debugDescription() {
      return "vertical multidrag";
    }
  };
  (multidrag.VerticalMultiDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    multidrag.VerticalMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.VerticalMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.VerticalMultiDragGestureRecognizer);
  dart.setMethodSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._VerticalPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.VerticalMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.VerticalMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.VerticalMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  const _timer$ = dart.privateName(multidrag, "_timer");
  const _starter = dart.privateName(multidrag, "_starter");
  const _delayPassed = dart.privateName(multidrag, "_delayPassed");
  const _ensureTimerStopped = dart.privateName(multidrag, "_ensureTimerStopped");
  multidrag._DelayedPointerState = class _DelayedPointerState extends multidrag.MultiDragPointerState {
    [_delayPassed]() {
      if (!(this[_timer$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 470, 12, "_timer != null");
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 471, 12, "pendingDelta != null");
      if (!(dart.notNull(this.pendingDelta.distance) <= 18)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 472, 12, "pendingDelta.distance <= kTouchSlop");
      this[_timer$] = null;
      if (this[_starter] != null) {
        this[_starter](this.initialPosition);
        this[_starter] = null;
      } else {
        this.resolve(arena.GestureDisposition.accepted);
      }
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 480, 12, "_starter == null");
    }
    [_ensureTimerStopped]() {
      let t5;
      t5 = this[_timer$];
      t5 == null ? null : t5.cancel();
      this[_timer$] = null;
    }
    accepted(starter) {
      if (!(this[_starter] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 490, 12, "_starter == null");
      if (this[_timer$] == null)
        starter(this.initialPosition);
      else
        this[_starter] = starter;
    }
    checkForResolutionAfterMove() {
      if (this[_timer$] == null) {
        if (!(this[_starter] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 505, 14, "_starter != null");
        return;
      }
      if (!(this.pendingDelta != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 508, 12, "pendingDelta != null");
      if (dart.notNull(this.pendingDelta.distance) > 18) {
        this.resolve(arena.GestureDisposition.rejected);
        this[_ensureTimerStopped]();
      }
    }
    dispose() {
      this[_ensureTimerStopped]();
      super.dispose();
    }
  };
  (multidrag._DelayedPointerState.new = function(initialPosition, delay) {
    this[_timer$] = null;
    this[_starter] = null;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 461, 16, "delay != null");
    multidrag._DelayedPointerState.__proto__.new.call(this, initialPosition);
    this[_timer$] = async.Timer.new(delay, dart.bind(this, _delayPassed));
  }).prototype = multidrag._DelayedPointerState.prototype;
  dart.addTypeTests(multidrag._DelayedPointerState);
  dart.setMethodSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getMethods(multidrag._DelayedPointerState.__proto__),
    [_delayPassed]: dart.fnType(dart.void, []),
    [_ensureTimerStopped]: dart.fnType(dart.void, []),
    accepted: dart.fnType(dart.void, [dart.fnType(drag$.Drag, [ui.Offset])])
  }));
  dart.setLibraryUri(multidrag._DelayedPointerState, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag._DelayedPointerState, () => ({
    __proto__: dart.getFields(multidrag._DelayedPointerState.__proto__),
    [_timer$]: dart.fieldType(async.Timer),
    [_starter]: dart.fieldType(dart.fnType(drag$.Drag, [ui.Offset]))
  }));
  multidrag.DelayedMultiDragGestureRecognizer = class DelayedMultiDragGestureRecognizer extends multidrag.MultiDragGestureRecognizer$(multidrag._DelayedPointerState) {
    get delay() {
      return this[delay$];
    }
    set delay(value) {
      super.delay = value;
    }
    createNewPointerState(event) {
      return new multidrag._DelayedPointerState.new(event.position, this.delay);
    }
    get debugDescription() {
      return "long multidrag";
    }
  };
  (multidrag.DelayedMultiDragGestureRecognizer.new = function(opts) {
    let delay = opts && 'delay' in opts ? opts.delay : C37 || CT.C37;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[delay$] = delay;
    if (!(delay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multidrag.dart", 552, 16, "delay != null");
    multidrag.DelayedMultiDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multidrag.DelayedMultiDragGestureRecognizer.prototype;
  dart.addTypeTests(multidrag.DelayedMultiDragGestureRecognizer);
  const delay$ = Symbol("DelayedMultiDragGestureRecognizer.delay");
  dart.setMethodSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    createNewPointerState: dart.fnType(multidrag._DelayedPointerState, [events.PointerDownEvent])
  }));
  dart.setGetterSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multidrag.DelayedMultiDragGestureRecognizer, "package:flutter_web/src/gestures/multidrag.dart");
  dart.setFieldSignature(multidrag.DelayedMultiDragGestureRecognizer, () => ({
    __proto__: dart.getFields(multidrag.DelayedMultiDragGestureRecognizer.__proto__),
    delay: dart.finalFieldType(core.Duration)
  }));
  const _timeout = dart.privateName(multitap, "_timeout");
  const _timer$0 = dart.privateName(multitap, "_timer");
  const _onTimeout = dart.privateName(multitap, "_onTimeout");
  multitap._CountdownZoned = class _CountdownZoned extends core.Object {
    get timeout() {
      return this[_timeout];
    }
    [_onTimeout]() {
      this[_timeout] = true;
    }
  };
  (multitap._CountdownZoned.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    this[_timeout] = false;
    this[_timer$0] = null;
    if (!(duration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 46, 59, "duration != null");
    this[_timer$0] = async.Timer.new(duration, dart.bind(this, _onTimeout));
  }).prototype = multitap._CountdownZoned.prototype;
  dart.addTypeTests(multitap._CountdownZoned);
  dart.setMethodSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getMethods(multitap._CountdownZoned.__proto__),
    [_onTimeout]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getGetters(multitap._CountdownZoned.__proto__),
    timeout: core.bool
  }));
  dart.setLibraryUri(multitap._CountdownZoned, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._CountdownZoned, () => ({
    __proto__: dart.getFields(multitap._CountdownZoned.__proto__),
    [_timeout]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer)
  }));
  const _isTrackingPointer = dart.privateName(multitap, "_isTrackingPointer");
  const _initialPosition = dart.privateName(multitap, "_initialPosition");
  const _doubleTapMinTimeCountdown = dart.privateName(multitap, "_doubleTapMinTimeCountdown");
  multitap._TapTracker = class _TapTracker extends core.Object {
    startTrackingPointer(route) {
      if (!dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = true;
        binding$0.GestureBinding.instance.pointerRouter.addRoute(this.pointer, route);
      }
    }
    stopTrackingPointer(route) {
      if (dart.test(this[_isTrackingPointer])) {
        this[_isTrackingPointer] = false;
        binding$0.GestureBinding.instance.pointerRouter.removeRoute(this.pointer, route);
      }
    }
    isWithinTolerance(event, tolerance) {
      let offset = event.position['-'](this[_initialPosition]);
      return dart.notNull(offset.distance) <= dart.notNull(tolerance);
    }
    hasElapsedMinTime() {
      return this[_doubleTapMinTimeCountdown].timeout;
    }
    hasSameButton(event) {
      return event.buttons == this.initialButtons;
    }
  };
  (multitap._TapTracker.new = function(opts) {
    let event = opts && 'event' in opts ? opts.event : null;
    let entry = opts && 'entry' in opts ? opts.entry : null;
    let doubleTapMinTime = opts && 'doubleTapMinTime' in opts ? opts.doubleTapMinTime : null;
    this[_isTrackingPointer] = false;
    this.entry = entry;
    if (!(doubleTapMinTime != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 67, 16, "doubleTapMinTime != null");
    if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 68, 16, "event != null");
    if (!(event.buttons != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 69, 16, "event.buttons != null");
    this.pointer = event.pointer;
    this[_initialPosition] = event.position;
    this.initialButtons = event.buttons;
    this[_doubleTapMinTimeCountdown] = new multitap._CountdownZoned.new({duration: doubleTapMinTime});
    ;
  }).prototype = multitap._TapTracker.prototype;
  dart.addTypeTests(multitap._TapTracker);
  dart.setMethodSignature(multitap._TapTracker, () => ({
    __proto__: dart.getMethods(multitap._TapTracker.__proto__),
    startTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    stopTrackingPointer: dart.fnType(dart.void, [dart.fnType(dart.void, [events.PointerEvent])]),
    isWithinTolerance: dart.fnType(core.bool, [events.PointerEvent, core.double]),
    hasElapsedMinTime: dart.fnType(core.bool, []),
    hasSameButton: dart.fnType(core.bool, [events.PointerDownEvent])
  }));
  dart.setLibraryUri(multitap._TapTracker, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapTracker, () => ({
    __proto__: dart.getFields(multitap._TapTracker.__proto__),
    pointer: dart.finalFieldType(core.int),
    entry: dart.finalFieldType(arena.GestureArenaEntry),
    [_initialPosition]: dart.finalFieldType(ui.Offset),
    initialButtons: dart.finalFieldType(core.int),
    [_doubleTapMinTimeCountdown]: dart.finalFieldType(multitap._CountdownZoned),
    [_isTrackingPointer]: dart.fieldType(core.bool)
  }));
  const _doubleTapTimer = dart.privateName(multitap, "_doubleTapTimer");
  const _firstTap = dart.privateName(multitap, "_firstTap");
  const _trackers = dart.privateName(multitap, "_trackers");
  const _reset$0 = dart.privateName(multitap, "_reset");
  const _trackFirstTap = dart.privateName(multitap, "_trackFirstTap");
  const _stopDoubleTapTimer = dart.privateName(multitap, "_stopDoubleTapTimer");
  const _handleEvent$0 = dart.privateName(multitap, "_handleEvent");
  const _registerFirstTap = dart.privateName(multitap, "_registerFirstTap");
  const _registerSecondTap = dart.privateName(multitap, "_registerSecondTap");
  const _reject = dart.privateName(multitap, "_reject");
  const _freezeTracker = dart.privateName(multitap, "_freezeTracker");
  const _clearTrackers = dart.privateName(multitap, "_clearTrackers");
  const _startDoubleTapTimer = dart.privateName(multitap, "_startDoubleTapTimer");
  const _checkUp$ = dart.privateName(multitap, "_checkUp");
  multitap.DoubleTapGestureRecognizer = class DoubleTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onDoubleTap() {
      return this[onDoubleTap];
    }
    set onDoubleTap(value) {
      this[onDoubleTap] = value;
    }
    isPointerAllowed(event) {
      if (this[_firstTap] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDoubleTap == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      if (this[_firstTap] != null) {
        if (!dart.test(this[_firstTap].isWithinTolerance(event, 100))) {
          return;
        } else if (!dart.test(this[_firstTap].hasElapsedMinTime()) || !dart.test(this[_firstTap].hasSameButton(events.PointerDownEvent._check(event)))) {
          this[_reset$0]();
          return this[_trackFirstTap](event);
        }
      }
      this[_trackFirstTap](event);
    }
    [_trackFirstTap](event) {
      this[_stopDoubleTapTimer]();
      let tracker = new multitap._TapTracker.new({event: events.PointerDownEvent._check(event), entry: binding$0.GestureBinding.instance.gestureArena.add(event.pointer, this), doubleTapMinTime: constants.kDoubleTapMinTime});
      this[_trackers][$_set](event.pointer, tracker);
      tracker.startTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_handleEvent$0](event) {
      let tracker = this[_trackers][$_get](event.pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 206, 12, "tracker != null");
      if (events.PointerUpEvent.is(event)) {
        if (this[_firstTap] == null)
          this[_registerFirstTap](tracker);
        else
          this[_registerSecondTap](tracker);
      } else if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(tracker.isWithinTolerance(event, 18))) this[_reject](tracker);
      } else if (events.PointerCancelEvent.is(event)) {
        this[_reject](tracker);
      }
    }
    acceptGesture(pointer) {
    }
    rejectGesture(pointer) {
      let tracker = this[_trackers][$_get](pointer);
      if (tracker == null && this[_firstTap] != null && this[_firstTap].pointer == pointer) tracker = this[_firstTap];
      if (tracker != null) this[_reject](tracker);
    }
    [_reject](tracker) {
      this[_trackers][$remove](tracker.pointer);
      tracker.entry.resolve(arena.GestureDisposition.rejected);
      this[_freezeTracker](tracker);
      if (this[_firstTap] != null && (dart.test(this[_trackers][$isEmpty]) || dart.equals(tracker, this[_firstTap]))) this[_reset$0]();
    }
    dispose() {
      this[_reset$0]();
      super.dispose();
    }
    [_reset$0]() {
      this[_stopDoubleTapTimer]();
      if (this[_firstTap] != null) {
        let tracker = this[_firstTap];
        this[_firstTap] = null;
        this[_reject](tracker);
        binding$0.GestureBinding.instance.gestureArena.release(tracker.pointer);
      }
      this[_clearTrackers]();
    }
    [_registerFirstTap](tracker) {
      this[_startDoubleTapTimer]();
      binding$0.GestureBinding.instance.gestureArena.hold(tracker.pointer);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_clearTrackers]();
      this[_firstTap] = tracker;
    }
    [_registerSecondTap](tracker) {
      this[_firstTap].entry.resolve(arena.GestureDisposition.accepted);
      tracker.entry.resolve(arena.GestureDisposition.accepted);
      this[_freezeTracker](tracker);
      this[_trackers][$remove](tracker.pointer);
      this[_checkUp$](tracker.initialButtons);
      this[_reset$0]();
    }
    [_clearTrackers]() {
      this[_trackers][$values][$toList]()[$forEach](dart.bind(this, _reject));
      if (!dart.test(this[_trackers][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 285, 12, "_trackers.isEmpty");
    }
    [_freezeTracker](tracker) {
      tracker.stopTrackingPointer(dart.bind(this, _handleEvent$0));
    }
    [_startDoubleTapTimer]() {
      this[_doubleTapTimer] == null ? this[_doubleTapTimer] = async.Timer.new(constants.kDoubleTapTimeout, dart.bind(this, _reset$0)) : null;
    }
    [_stopDoubleTapTimer]() {
      if (this[_doubleTapTimer] != null) {
        this[_doubleTapTimer].cancel();
        this[_doubleTapTimer] = null;
      }
    }
    [_checkUp$](buttons) {
      if (!(buttons === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 304, 12, "buttons == kPrimaryButton");
      if (this.onDoubleTap != null) this.invokeCallback(dart.void, "onDoubleTap", this.onDoubleTap);
    }
    get debugDescription() {
      return "double tap";
    }
  };
  (multitap.DoubleTapGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onDoubleTap] = null;
    this[_doubleTapTimer] = null;
    this[_firstTap] = null;
    this[_trackers] = new (IdentityMapOfint$_TapTracker()).new();
    multitap.DoubleTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.DoubleTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.DoubleTapGestureRecognizer);
  const onDoubleTap = Symbol("DoubleTapGestureRecognizer.onDoubleTap");
  dart.setMethodSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.DoubleTapGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    [_trackFirstTap]: dart.fnType(dart.void, [events.PointerEvent]),
    [_handleEvent$0]: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_reject]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_reset$0]: dart.fnType(dart.void, []),
    [_registerFirstTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_registerSecondTap]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_clearTrackers]: dart.fnType(dart.void, []),
    [_freezeTracker]: dart.fnType(dart.void, [multitap._TapTracker]),
    [_startDoubleTapTimer]: dart.fnType(dart.void, []),
    [_stopDoubleTapTimer]: dart.fnType(dart.void, []),
    [_checkUp$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.DoubleTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.DoubleTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.DoubleTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.DoubleTapGestureRecognizer.__proto__),
    onDoubleTap: dart.fieldType(dart.fnType(dart.void, [])),
    [_doubleTapTimer]: dart.fieldType(async.Timer),
    [_firstTap]: dart.fieldType(multitap._TapTracker),
    [_trackers]: dart.finalFieldType(core.Map$(core.int, multitap._TapTracker))
  }));
  const _wonArena = dart.privateName(multitap, "_wonArena");
  const _finalPosition$ = dart.privateName(multitap, "_finalPosition");
  const _lastPosition$ = dart.privateName(multitap, "_lastPosition");
  const _dispatchLongTap = dart.privateName(multitap, "_dispatchLongTap");
  const _check = dart.privateName(multitap, "_check");
  const _dispatchCancel = dart.privateName(multitap, "_dispatchCancel");
  const _dispatchTap = dart.privateName(multitap, "_dispatchTap");
  multitap._TapGesture = class _TapGesture extends multitap._TapTracker {
    handleEvent(event) {
      if (!(event.pointer == this.pointer)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 345, 12, "event.pointer == pointer");
      if (events.PointerMoveEvent.is(event)) {
        if (!dart.test(this.isWithinTolerance(event, 18)))
          this.cancel();
        else
          this[_lastPosition$] = event.position;
      } else if (events.PointerCancelEvent.is(event)) {
        this.cancel();
      } else if (events.PointerUpEvent.is(event)) {
        this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
        this[_finalPosition$] = event.position;
        this[_check]();
      }
    }
    stopTrackingPointer(route) {
      let t5;
      t5 = this[_timer$0];
      t5 == null ? null : t5.cancel();
      this[_timer$0] = null;
      super.stopTrackingPointer(route);
    }
    accept() {
      this[_wonArena] = true;
      this[_check]();
    }
    reject() {
      this.stopTrackingPointer(dart.bind(this, 'handleEvent'));
      this.gestureRecognizer[_dispatchCancel](this.pointer);
    }
    cancel() {
      if (dart.test(this[_wonArena]))
        this.reject();
      else
        this.entry.resolve(arena.GestureDisposition.rejected);
    }
    [_check]() {
      if (dart.test(this[_wonArena]) && this[_finalPosition$] != null) this.gestureRecognizer[_dispatchTap](this.pointer, this[_finalPosition$]);
    }
  };
  (multitap._TapGesture.new = function(opts) {
    let gestureRecognizer = opts && 'gestureRecognizer' in opts ? opts.gestureRecognizer : null;
    let event = opts && 'event' in opts ? opts.event : null;
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : null;
    this[_wonArena] = false;
    this[_timer$0] = null;
    this[_finalPosition$] = null;
    this.gestureRecognizer = gestureRecognizer;
    this[_lastPosition$] = event.position;
    multitap._TapGesture.__proto__.new.call(this, {event: events.PointerDownEvent._check(event), entry: binding$0.GestureBinding.instance.gestureArena.add(event.pointer, gestureRecognizer), doubleTapMinTime: constants.kDoubleTapMinTime});
    this.startTrackingPointer(dart.bind(this, 'handleEvent'));
    if (dart.test(longTapDelay['>'](core.Duration.zero))) {
      this[_timer$0] = async.Timer.new(longTapDelay, dart.fn(() => {
        this[_timer$0] = null;
        this.gestureRecognizer[_dispatchLongTap](event.pointer, this[_lastPosition$]);
      }, VoidToNull()));
    }
  }).prototype = multitap._TapGesture.prototype;
  dart.addTypeTests(multitap._TapGesture);
  dart.setMethodSignature(multitap._TapGesture, () => ({
    __proto__: dart.getMethods(multitap._TapGesture.__proto__),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    accept: dart.fnType(dart.void, []),
    reject: dart.fnType(dart.void, []),
    cancel: dart.fnType(dart.void, []),
    [_check]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(multitap._TapGesture, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap._TapGesture, () => ({
    __proto__: dart.getFields(multitap._TapGesture.__proto__),
    gestureRecognizer: dart.finalFieldType(multitap.MultiTapGestureRecognizer),
    [_wonArena]: dart.fieldType(core.bool),
    [_timer$0]: dart.fieldType(async.Timer),
    [_lastPosition$]: dart.fieldType(ui.Offset),
    [_finalPosition$]: dart.fieldType(ui.Offset)
  }));
  const _gestureMap = dart.privateName(multitap, "_gestureMap");
  multitap.MultiTapGestureRecognizer = class MultiTapGestureRecognizer extends recognizer.GestureRecognizer {
    get onTapDown() {
      return this[onTapDown$];
    }
    set onTapDown(value) {
      this[onTapDown$] = value;
    }
    get onTapUp() {
      return this[onTapUp$];
    }
    set onTapUp(value) {
      this[onTapUp$] = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      this[onTap$] = value;
    }
    get onTapCancel() {
      return this[onTapCancel$];
    }
    set onTapCancel(value) {
      this[onTapCancel$] = value;
    }
    get longTapDelay() {
      return this[longTapDelay$];
    }
    set longTapDelay(value) {
      this[longTapDelay$] = value;
    }
    get onLongTapDown() {
      return this[onLongTapDown];
    }
    set onLongTapDown(value) {
      this[onLongTapDown] = value;
    }
    addAllowedPointer(event) {
      if (!!dart.test(this[_gestureMap][$containsKey](event.pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 438, 12, "!_gestureMap.containsKey(event.pointer)");
      this[_gestureMap][$_set](event.pointer, new multitap._TapGesture.new({gestureRecognizer: this, event: event, longTapDelay: this.longTapDelay}));
      if (this.onTapDown != null) this.invokeCallback(dart.void, "onTapDown", dart.fn(() => {
        this.onTapDown(event.pointer, new tap.TapDownDetails.new({globalPosition: event.position, kind: event.kind}));
      }, VoidToNull()));
    }
    acceptGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 457, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).accept();
    }
    rejectGesture(pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 463, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$_get](pointer).reject();
      if (!!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 465, 12, "!_gestureMap.containsKey(pointer)");
    }
    [_dispatchCancel](pointer) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 469, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapCancel != null) this.invokeCallback(dart.void, "onTapCancel", dart.fn(() => this.onTapCancel(pointer), VoidTovoid()));
    }
    [_dispatchTap](pointer, globalPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 476, 12, "_gestureMap.containsKey(pointer)");
      this[_gestureMap][$remove](pointer);
      if (this.onTapUp != null) this.invokeCallback(dart.void, "onTapUp", dart.fn(() => this.onTapUp(pointer, new tap.TapUpDetails.new({globalPosition: globalPosition})), VoidTovoid()));
      if (this.onTap != null) this.invokeCallback(dart.void, "onTap", dart.fn(() => this.onTap(pointer), VoidTovoid()));
    }
    [_dispatchLongTap](pointer, lastPosition) {
      if (!dart.test(this[_gestureMap][$containsKey](pointer))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 485, 12, "_gestureMap.containsKey(pointer)");
      if (this.onLongTapDown != null) this.invokeCallback(dart.void, "onLongTapDown", dart.fn(() => {
        this.onLongTapDown(pointer, new tap.TapDownDetails.new({globalPosition: lastPosition, kind: this.getKindForPointer(pointer)}));
      }, VoidToNull()));
    }
    dispose() {
      let localGestures = ListOf_TapGesture().from(this[_gestureMap][$values]);
      for (let gesture of localGestures)
        gesture.cancel();
      if (!dart.test(this[_gestureMap][$isEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/multitap.dart", 504, 12, "_gestureMap.isEmpty");
      super.dispose();
    }
    get debugDescription() {
      return "multitap";
    }
  };
  (multitap.MultiTapGestureRecognizer.new = function(opts) {
    let longTapDelay = opts && 'longTapDelay' in opts ? opts.longTapDelay : C3 || CT.C3;
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    this[onTapDown$] = null;
    this[onTapUp$] = null;
    this[onTap$] = null;
    this[onTapCancel$] = null;
    this[onLongTapDown] = null;
    this[_gestureMap] = new (IdentityMapOfint$_TapGesture()).new();
    this[longTapDelay$] = longTapDelay;
    multitap.MultiTapGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = multitap.MultiTapGestureRecognizer.prototype;
  dart.addTypeTests(multitap.MultiTapGestureRecognizer);
  const onTapDown$ = Symbol("MultiTapGestureRecognizer.onTapDown");
  const onTapUp$ = Symbol("MultiTapGestureRecognizer.onTapUp");
  const onTap$ = Symbol("MultiTapGestureRecognizer.onTap");
  const onTapCancel$ = Symbol("MultiTapGestureRecognizer.onTapCancel");
  const longTapDelay$ = Symbol("MultiTapGestureRecognizer.longTapDelay");
  const onLongTapDown = Symbol("MultiTapGestureRecognizer.onLongTapDown");
  dart.setMethodSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getMethods(multitap.MultiTapGestureRecognizer.__proto__),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    acceptGesture: dart.fnType(dart.void, [core.int]),
    rejectGesture: dart.fnType(dart.void, [core.int]),
    [_dispatchCancel]: dart.fnType(dart.void, [core.int]),
    [_dispatchTap]: dart.fnType(dart.void, [core.int, ui.Offset]),
    [_dispatchLongTap]: dart.fnType(dart.void, [core.int, ui.Offset])
  }));
  dart.setGetterSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getGetters(multitap.MultiTapGestureRecognizer.__proto__),
    debugDescription: core.String
  }));
  dart.setLibraryUri(multitap.MultiTapGestureRecognizer, "package:flutter_web/src/gestures/multitap.dart");
  dart.setFieldSignature(multitap.MultiTapGestureRecognizer, () => ({
    __proto__: dart.getFields(multitap.MultiTapGestureRecognizer.__proto__),
    onTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    onTapUp: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapUpDetails])),
    onTap: dart.fieldType(dart.fnType(dart.void, [core.int])),
    onTapCancel: dart.fieldType(dart.fnType(dart.void, [core.int])),
    longTapDelay: dart.fieldType(core.Duration),
    onLongTapDown: dart.fieldType(dart.fnType(dart.void, [core.int, tap.TapDownDetails])),
    [_gestureMap]: dart.finalFieldType(core.Map$(core.int, multitap._TapGesture))
  }));
  const _name$3 = dart.privateName(monodrag, "_name");
  let C48;
  let C49;
  let C50;
  let C51;
  monodrag._DragState = class _DragState extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (monodrag._DragState.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = monodrag._DragState.prototype;
  dart.addTypeTests(monodrag._DragState);
  dart.setLibraryUri(monodrag._DragState, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag._DragState, () => ({
    __proto__: dart.getFields(monodrag._DragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(monodrag._DragState, ['toString']);
  monodrag._DragState.ready = C48 || CT.C48;
  monodrag._DragState.possible = C49 || CT.C49;
  monodrag._DragState.accepted = C50 || CT.C50;
  monodrag._DragState.values = C51 || CT.C51;
  const _state$0 = dart.privateName(monodrag, "_state");
  const _initialPosition$ = dart.privateName(monodrag, "_initialPosition");
  const _pendingDragOffset = dart.privateName(monodrag, "_pendingDragOffset");
  const _lastPendingEventTimestamp$ = dart.privateName(monodrag, "_lastPendingEventTimestamp");
  const _initialButtons$0 = dart.privateName(monodrag, "_initialButtons");
  const _velocityTrackers$ = dart.privateName(monodrag, "_velocityTrackers");
  const _checkDown$ = dart.privateName(monodrag, "_checkDown");
  const _getDeltaForDetails = dart.privateName(monodrag, "_getDeltaForDetails");
  const _getPrimaryValueFromOffset = dart.privateName(monodrag, "_getPrimaryValueFromOffset");
  const _checkUpdate = dart.privateName(monodrag, "_checkUpdate");
  const _hasSufficientPendingDragDeltaToAccept = dart.privateName(monodrag, "_hasSufficientPendingDragDeltaToAccept");
  const _checkStart = dart.privateName(monodrag, "_checkStart");
  const _checkCancel$ = dart.privateName(monodrag, "_checkCancel");
  const _checkEnd = dart.privateName(monodrag, "_checkEnd");
  const _isFlingGesture$ = dart.privateName(monodrag, "_isFlingGesture");
  monodrag.DragGestureRecognizer = class DragGestureRecognizer extends recognizer.OneSequenceGestureRecognizer {
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      this[dragStartBehavior$] = value;
    }
    get onDown() {
      return this[onDown];
    }
    set onDown(value) {
      this[onDown] = value;
    }
    get onStart() {
      return this[onStart$0];
    }
    set onStart(value) {
      this[onStart$0] = value;
    }
    get onUpdate() {
      return this[onUpdate$0];
    }
    set onUpdate(value) {
      this[onUpdate$0] = value;
    }
    get onEnd() {
      return this[onEnd$0];
    }
    set onEnd(value) {
      this[onEnd$0] = value;
    }
    get onCancel() {
      return this[onCancel];
    }
    set onCancel(value) {
      this[onCancel] = value;
    }
    get minFlingDistance() {
      return this[minFlingDistance];
    }
    set minFlingDistance(value) {
      this[minFlingDistance] = value;
    }
    get minFlingVelocity() {
      return this[minFlingVelocity];
    }
    set minFlingVelocity(value) {
      this[minFlingVelocity] = value;
    }
    get maxFlingVelocity() {
      return this[maxFlingVelocity];
    }
    set maxFlingVelocity(value) {
      this[maxFlingVelocity] = value;
    }
    isPointerAllowed(event) {
      if (this[_initialButtons$0] == null) {
        switch (event.buttons) {
          case 1:
          {
            if (this.onDown == null && this.onStart == null && this.onUpdate == null && this.onEnd == null && this.onCancel == null) return false;
            break;
          }
          default:
          {
            return false;
          }
        }
      } else {
        if (event.buttons != this[_initialButtons$0]) {
          return false;
        }
      }
      return super.isPointerAllowed(events.PointerDownEvent._check(event));
    }
    addAllowedPointer(event) {
      this.startTrackingPointer(event.pointer);
      this[_velocityTrackers$][$_set](event.pointer, new velocity_tracker.VelocityTracker.new());
      if (dart.equals(this[_state$0], monodrag._DragState.ready)) {
        this[_state$0] = monodrag._DragState.possible;
        this[_initialPosition$] = event.position;
        this[_initialButtons$0] = event.buttons;
        this[_pendingDragOffset] = ui.Offset.zero;
        this[_lastPendingEventTimestamp$] = event.timeStamp;
        this[_checkDown$]();
      } else if (dart.equals(this[_state$0], monodrag._DragState.accepted)) {
        this.resolve(arena.GestureDisposition.accepted);
      }
    }
    handleEvent(event) {
      if (!!dart.equals(this[_state$0], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 228, 12, "_state != _DragState.ready");
      if (!dart.test(event.synthesized) && (events.PointerDownEvent.is(event) || events.PointerMoveEvent.is(event))) {
        let tracker = this[_velocityTrackers$][$_get](event.pointer);
        if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 232, 14, "tracker != null");
        tracker.addPosition(event.timeStamp, event.position);
      }
      if (events.PointerMoveEvent.is(event)) {
        if (event.buttons != this[_initialButtons$0]) {
          this.resolve(arena.GestureDisposition.rejected);
          this.stopTrackingPointer(event.pointer);
          return;
        }
        let delta = event.delta;
        if (dart.equals(this[_state$0], monodrag._DragState.accepted)) {
          this[_checkUpdate]({sourceTimeStamp: event.timeStamp, delta: this[_getDeltaForDetails](delta), primaryDelta: this[_getPrimaryValueFromOffset](delta), globalPosition: event.position});
        } else {
          this[_pendingDragOffset] = this[_pendingDragOffset]['+'](delta);
          this[_lastPendingEventTimestamp$] = event.timeStamp;
          if (dart.test(this[_hasSufficientPendingDragDeltaToAccept])) this.resolve(arena.GestureDisposition.accepted);
        }
      }
      this.stopTrackingIfPointerNoLongerDown(event);
    }
    acceptGesture(pointer) {
      if (!dart.equals(this[_state$0], monodrag._DragState.accepted)) {
        this[_state$0] = monodrag._DragState.accepted;
        let delta = this[_pendingDragOffset];
        let timestamp = this[_lastPendingEventTimestamp$];
        let updateDelta = null;
        switch (this.dragStartBehavior) {
          case C14 || CT.C14:
          {
            this[_initialPosition$] = this[_initialPosition$]['+'](delta);
            updateDelta = ui.Offset.zero;
            break;
          }
          case C13 || CT.C13:
          {
            updateDelta = this[_getDeltaForDetails](delta);
            break;
          }
        }
        this[_pendingDragOffset] = ui.Offset.zero;
        this[_lastPendingEventTimestamp$] = null;
        this[_checkStart](timestamp);
        if (!dart.equals(updateDelta, ui.Offset.zero)) {
          this[_checkUpdate]({sourceTimeStamp: timestamp, delta: updateDelta, primaryDelta: this[_getPrimaryValueFromOffset](updateDelta), globalPosition: this[_initialPosition$]['+'](updateDelta)});
        }
      }
    }
    rejectGesture(pointer) {
      this.stopTrackingPointer(pointer);
    }
    didStopTrackingLastPointer(pointer) {
      if (!!dart.equals(this[_state$0], monodrag._DragState.ready)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 298, 12, "_state != _DragState.ready");
      switch (this[_state$0]) {
        case C48 || CT.C48:
        {
          break;
        }
        case C49 || CT.C49:
        {
          this.resolve(arena.GestureDisposition.rejected);
          this[_checkCancel$]();
          break;
        }
        case C50 || CT.C50:
        {
          this[_checkEnd](pointer);
          break;
        }
      }
      this[_velocityTrackers$][$clear]();
      this[_initialButtons$0] = null;
      this[_state$0] = monodrag._DragState.ready;
    }
    [_checkDown$]() {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 318, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragDownDetails.new({globalPosition: this[_initialPosition$]});
      if (this.onDown != null) this.invokeCallback(dart.void, "onDown", dart.fn(() => this.onDown(details), VoidTovoid()));
    }
    [_checkStart](timestamp) {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 326, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragStartDetails.new({sourceTimeStamp: timestamp, globalPosition: this[_initialPosition$]});
      if (this.onStart != null) this.invokeCallback(dart.void, "onStart", dart.fn(() => this.onStart(details), VoidTovoid()));
    }
    [_checkUpdate](opts) {
      let sourceTimeStamp = opts && 'sourceTimeStamp' in opts ? opts.sourceTimeStamp : null;
      let delta = opts && 'delta' in opts ? opts.delta : null;
      let primaryDelta = opts && 'primaryDelta' in opts ? opts.primaryDelta : null;
      let globalPosition = opts && 'globalPosition' in opts ? opts.globalPosition : null;
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 341, 12, "_initialButtons == kPrimaryButton");
      let details = new drag_details.DragUpdateDetails.new({sourceTimeStamp: sourceTimeStamp, delta: delta, primaryDelta: primaryDelta, globalPosition: globalPosition});
      if (this.onUpdate != null) this.invokeCallback(dart.void, "onUpdate", dart.fn(() => this.onUpdate(details), VoidTovoid()));
    }
    [_checkEnd](pointer) {
      let t5, t5$;
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 353, 12, "_initialButtons == kPrimaryButton");
      if (this.onEnd == null) return;
      let tracker = this[_velocityTrackers$][$_get](pointer);
      if (!(tracker != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 357, 12, "tracker != null");
      let details = null;
      let debugReport = null;
      let estimate = tracker.getVelocityEstimate();
      if (estimate != null && dart.test(this[_isFlingGesture$](estimate))) {
        let velocity = new velocity_tracker.Velocity.new({pixelsPerSecond: estimate.pixelsPerSecond}).clampMagnitude((t5 = this.minFlingVelocity, t5 == null ? 50 : t5), (t5$ = this.maxFlingVelocity, t5$ == null ? 8000 : t5$));
        details = new drag_details.DragEndDetails.new({velocity: velocity, primaryVelocity: this[_getPrimaryValueFromOffset](velocity.pixelsPerSecond)});
        debugReport = dart.fn(() => dart.str(estimate) + "; fling at " + dart.str(velocity) + ".", VoidToString());
      } else {
        details = new drag_details.DragEndDetails.new({velocity: velocity_tracker.Velocity.zero, primaryVelocity: 0.0});
        debugReport = dart.fn(() => {
          if (estimate == null) return "Could not estimate velocity.";
          return dart.str(estimate) + "; judged to not be a fling.";
        }, VoidToString());
      }
      this.invokeCallback(dart.void, "onEnd", dart.fn(() => this.onEnd(details), VoidTovoid()), {debugReport: VoidToString()._check(debugReport)});
    }
    [_checkCancel$]() {
      if (!(this[_initialButtons$0] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 390, 12, "_initialButtons == kPrimaryButton");
      if (this.onCancel != null) this.invokeCallback(dart.void, "onCancel", this.onCancel);
    }
    dispose() {
      this[_velocityTrackers$][$clear]();
      super.dispose();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfDragStartBehavior()).new("start behavior", this.dragStartBehavior));
    }
  };
  (monodrag.DragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C14 || CT.C14;
    this[onDown] = null;
    this[onStart$0] = null;
    this[onUpdate$0] = null;
    this[onEnd$0] = null;
    this[onCancel] = null;
    this[minFlingDistance] = null;
    this[minFlingVelocity] = null;
    this[maxFlingVelocity] = null;
    this[_state$0] = monodrag._DragState.ready;
    this[_initialPosition$] = null;
    this[_pendingDragOffset] = null;
    this[_lastPendingEventTimestamp$] = null;
    this[_initialButtons$0] = null;
    this[_velocityTrackers$] = new (IdentityMapOfint$VelocityTracker()).new();
    this[dragStartBehavior$] = dragStartBehavior;
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/gestures/monodrag.dart", 66, 16, "dragStartBehavior != null");
    monodrag.DragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.DragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.DragGestureRecognizer);
  const dragStartBehavior$ = Symbol("DragGestureRecognizer.dragStartBehavior");
  const onDown = Symbol("DragGestureRecognizer.onDown");
  const onStart$0 = Symbol("DragGestureRecognizer.onStart");
  const onUpdate$0 = Symbol("DragGestureRecognizer.onUpdate");
  const onEnd$0 = Symbol("DragGestureRecognizer.onEnd");
  const onCancel = Symbol("DragGestureRecognizer.onCancel");
  const minFlingDistance = Symbol("DragGestureRecognizer.minFlingDistance");
  const minFlingVelocity = Symbol("DragGestureRecognizer.minFlingVelocity");
  const maxFlingVelocity = Symbol("DragGestureRecognizer.maxFlingVelocity");
  dart.setMethodSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.DragGestureRecognizer.__proto__),
    isPointerAllowed: dart.fnType(core.bool, [events.PointerEvent]),
    addAllowedPointer: dart.fnType(dart.void, [events.PointerEvent]),
    handleEvent: dart.fnType(dart.void, [events.PointerEvent]),
    didStopTrackingLastPointer: dart.fnType(dart.void, [core.int]),
    [_checkDown$]: dart.fnType(dart.void, []),
    [_checkStart]: dart.fnType(dart.void, [core.Duration]),
    [_checkUpdate]: dart.fnType(dart.void, [], {delta: ui.Offset, globalPosition: ui.Offset, primaryDelta: core.double, sourceTimeStamp: core.Duration}),
    [_checkEnd]: dart.fnType(dart.void, [core.int]),
    [_checkCancel$]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(monodrag.DragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  dart.setFieldSignature(monodrag.DragGestureRecognizer, () => ({
    __proto__: dart.getFields(monodrag.DragGestureRecognizer.__proto__),
    dragStartBehavior: dart.fieldType(recognizer.DragStartBehavior),
    onDown: dart.fieldType(dart.fnType(dart.void, [drag_details.DragDownDetails])),
    onStart: dart.fieldType(dart.fnType(dart.void, [drag_details.DragStartDetails])),
    onUpdate: dart.fieldType(dart.fnType(dart.void, [drag_details.DragUpdateDetails])),
    onEnd: dart.fieldType(dart.fnType(dart.void, [drag_details.DragEndDetails])),
    onCancel: dart.fieldType(dart.fnType(dart.void, [])),
    minFlingDistance: dart.fieldType(core.double),
    minFlingVelocity: dart.fieldType(core.double),
    maxFlingVelocity: dart.fieldType(core.double),
    [_state$0]: dart.fieldType(monodrag._DragState),
    [_initialPosition$]: dart.fieldType(ui.Offset),
    [_pendingDragOffset]: dart.fieldType(ui.Offset),
    [_lastPendingEventTimestamp$]: dart.fieldType(core.Duration),
    [_initialButtons$0]: dart.fieldType(core.int),
    [_velocityTrackers$]: dart.finalFieldType(core.Map$(core.int, velocity_tracker.VelocityTracker))
  }));
  monodrag.VerticalDragGestureRecognizer = class VerticalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    [_isFlingGesture$](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? 50 : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? 18 : t5$);
      return estimate.pixelsPerSecond.dy[$abs]() > dart.notNull(minVelocity) && estimate.offset.dy[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dy[$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(0.0, delta.dy);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dy;
    }
    get debugDescription() {
      return "vertical drag";
    }
  };
  (monodrag.VerticalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.VerticalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.VerticalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.VerticalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.VerticalDragGestureRecognizer.__proto__),
    [_isFlingGesture$]: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.VerticalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.VerticalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.VerticalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  monodrag.HorizontalDragGestureRecognizer = class HorizontalDragGestureRecognizer extends monodrag.DragGestureRecognizer {
    [_isFlingGesture$](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? 50 : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? 18 : t5$);
      return estimate.pixelsPerSecond.dx[$abs]() > dart.notNull(minVelocity) && estimate.offset.dx[$abs]() > dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return this[_pendingDragOffset].dx[$abs]() > 18;
    }
    [_getDeltaForDetails](delta) {
      return new ui.Offset.new(delta.dx, 0.0);
    }
    [_getPrimaryValueFromOffset](value) {
      return value.dx;
    }
    get debugDescription() {
      return "horizontal drag";
    }
  };
  (monodrag.HorizontalDragGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    let kind = opts && 'kind' in opts ? opts.kind : null;
    monodrag.HorizontalDragGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner, kind: kind});
    ;
  }).prototype = monodrag.HorizontalDragGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.HorizontalDragGestureRecognizer);
  dart.setMethodSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_isFlingGesture$]: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.HorizontalDragGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.HorizontalDragGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.HorizontalDragGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  monodrag.PanGestureRecognizer = class PanGestureRecognizer extends monodrag.DragGestureRecognizer {
    [_isFlingGesture$](estimate) {
      let t5, t5$;
      let minVelocity = (t5 = this.minFlingVelocity, t5 == null ? 50 : t5);
      let minDistance = (t5$ = this.minFlingDistance, t5$ == null ? 18 : t5$);
      return dart.notNull(estimate.pixelsPerSecond.distanceSquared) > dart.notNull(minVelocity) * dart.notNull(minVelocity) && dart.notNull(estimate.offset.distanceSquared) > dart.notNull(minDistance) * dart.notNull(minDistance);
    }
    get [_hasSufficientPendingDragDeltaToAccept]() {
      return dart.notNull(this[_pendingDragOffset].distance) > 36;
    }
    [_getDeltaForDetails](delta) {
      return delta;
    }
    [_getPrimaryValueFromOffset](value) {
      return null;
    }
    get debugDescription() {
      return "pan";
    }
  };
  (monodrag.PanGestureRecognizer.new = function(opts) {
    let debugOwner = opts && 'debugOwner' in opts ? opts.debugOwner : null;
    monodrag.PanGestureRecognizer.__proto__.new.call(this, {debugOwner: debugOwner});
    ;
  }).prototype = monodrag.PanGestureRecognizer.prototype;
  dart.addTypeTests(monodrag.PanGestureRecognizer);
  dart.setMethodSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getMethods(monodrag.PanGestureRecognizer.__proto__),
    [_isFlingGesture$]: dart.fnType(core.bool, [velocity_tracker.VelocityEstimate]),
    [_getDeltaForDetails]: dart.fnType(ui.Offset, [ui.Offset]),
    [_getPrimaryValueFromOffset]: dart.fnType(core.double, [ui.Offset])
  }));
  dart.setGetterSignature(monodrag.PanGestureRecognizer, () => ({
    __proto__: dart.getGetters(monodrag.PanGestureRecognizer.__proto__),
    [_hasSufficientPendingDragDeltaToAccept]: core.bool,
    debugDescription: core.String
  }));
  dart.setLibraryUri(monodrag.PanGestureRecognizer, "package:flutter_web/src/gestures/monodrag.dart");
  dart.trackLibraries("packages/flutter_web/src/gestures/arena", {
    "package:flutter_web/src/gestures/arena.dart": arena,
    "package:flutter_web/src/gestures/debug.dart": debug,
    "package:flutter_web/src/util.dart": util,
    "package:flutter_web/src/gestures/pointer_router.dart": pointer_router,
    "package:flutter_web/src/gestures/events.dart": events,
    "package:flutter_web/src/gestures/scale.dart": scale,
    "package:flutter_web/src/gestures/velocity_tracker.dart": velocity_tracker,
    "package:flutter_web/src/gestures/lsq_solver.dart": lsq_solver,
    "package:flutter_web/src/gestures/recognizer.dart": recognizer,
    "package:flutter_web/src/gestures/team.dart": team,
    "package:flutter_web/src/gestures/binding.dart": binding$0,
    "package:flutter_web/src/gestures/pointer_signal_resolver.dart": pointer_signal_resolver,
    "package:flutter_web/src/gestures/hit_test.dart": hit_test,
    "package:flutter_web/src/gestures/converter.dart": converter,
    "package:flutter_web/src/gestures/constants.dart": constants,
    "package:flutter_web/src/gestures/tap.dart": tap,
    "package:flutter_web/src/gestures/eager.dart": eager,
    "package:flutter_web/src/gestures/force_press.dart": force_press,
    "package:flutter_web/src/gestures/mouse_tracking.dart": mouse_tracking,
    "package:flutter_web/src/gestures/drag.dart": drag$,
    "package:flutter_web/src/gestures/drag_details.dart": drag_details,
    "package:flutter_web/src/gestures/long_press.dart": long_press,
    "package:flutter_web/src/gestures/multidrag.dart": multidrag,
    "package:flutter_web/src/gestures/multitap.dart": multitap,
    "package:flutter_web/src/gestures/monodrag.dart": monodrag
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["arena.dart","debug.dart","..\\\\util.dart","pointer_router.dart","events.dart","scale.dart","recognizer.dart","velocity_tracker.dart","lsq_solver.dart","team.dart","binding.dart","pointer_signal_resolver.dart","hit_test.dart","converter.dart","constants.dart","tap.dart","eager.dart","force_press.dart","mouse_tracking.dart","drag.dart","drag_details.dart","long_press.dart","multidrag.dart","multitap.dart","monodrag.dart"],"names":[],"mappings":"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","file":"arena.ddc.js"}');
  // Exports:
  return {
    src__gestures__arena: arena,
    src__gestures__debug: debug,
    src__util: util,
    src__gestures__pointer_router: pointer_router,
    src__gestures__events: events,
    src__gestures__scale: scale,
    src__gestures__velocity_tracker: velocity_tracker,
    src__gestures__lsq_solver: lsq_solver,
    src__gestures__recognizer: recognizer,
    src__gestures__team: team,
    src__gestures__binding: binding$0,
    src__gestures__pointer_signal_resolver: pointer_signal_resolver,
    src__gestures__hit_test: hit_test,
    src__gestures__converter: converter,
    src__gestures__constants: constants,
    src__gestures__tap: tap,
    src__gestures__eager: eager,
    src__gestures__force_press: force_press,
    src__gestures__mouse_tracking: mouse_tracking,
    src__gestures__drag: drag$,
    src__gestures__drag_details: drag_details,
    src__gestures__long_press: long_press,
    src__gestures__multidrag: multidrag,
    src__gestures__multitap: multitap,
    src__gestures__monodrag: monodrag
  };
});

//# sourceMappingURL=arena.ddc.js.map
