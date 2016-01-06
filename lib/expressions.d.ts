import * as Lexer from './lexer';
export declare function commonExpr(value: Array<number>, index: number): Lexer.Token;
export declare function boolCommonExpr(value: Array<number>, index: number): Lexer.Token;
export declare function andExpr(value: Array<number>, index: number): Lexer.Token;
export declare function orExpr(value: Array<number>, index: number): Lexer.Token;
export declare function leftRightExpr(value: Array<number>, index: number, expr: string, tokenType: Lexer.TokenType): Lexer.Token;
export declare function eqExpr(value: Array<number>, index: number): Lexer.Token;
export declare function neExpr(value: Array<number>, index: number): Lexer.Token;
export declare function ltExpr(value: Array<number>, index: number): Lexer.Token;
export declare function leExpr(value: Array<number>, index: number): Lexer.Token;
export declare function gtExpr(value: Array<number>, index: number): Lexer.Token;
export declare function geExpr(value: Array<number>, index: number): Lexer.Token;
export declare function hasExpr(value: Array<number>, index: number): Lexer.Token;
export declare function addExpr(value: Array<number>, index: number): Lexer.Token;
export declare function subExpr(value: Array<number>, index: number): Lexer.Token;
export declare function mulExpr(value: Array<number>, index: number): Lexer.Token;
export declare function divExpr(value: Array<number>, index: number): Lexer.Token;
export declare function modExpr(value: Array<number>, index: number): Lexer.Token;
export declare function notExpr(value: Array<number>, index: number): Lexer.Token;
export declare function boolParenExpr(value: Array<number>, index: number): Lexer.Token;
export declare function parenExpr(value: Array<number>, index: number): Lexer.Token;
export declare function boolMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function methodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function methodCallExprFactory(value: Array<number>, index: number, method: string, min?: number, max?: number): Lexer.Token;
export declare function containsMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function startsWithMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function endsWithMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function lengthMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function indexOfMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function substringMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function toLowerMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function toUpperMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function trimMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function concatMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function yearMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function monthMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function dayMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function hourMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function minuteMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function secondMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function fractionalsecondsMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function totalsecondsMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function dateMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function timeMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function totalOffsetMinutesMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function minDateTimeMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function maxDateTimeMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function nowMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function roundMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function floorMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function ceilingMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function distanceMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function geoLengthMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function intersectsMethodCallExpr(value: Array<number>, index: number): Lexer.Token;
export declare function isofExpr(value: Array<number>, index: number): Lexer.Token;
export declare function castExpr(value: Array<number>, index: number): Lexer.Token;
export declare function negateExpr(value: Array<number>, index: number): Lexer.Token;
export declare function firstMemberExpr(value: Array<number>, index: number): Lexer.Token;
export declare function memberExpr(value: Array<number>, index: number): Lexer.Token;
export declare function propertyPathExpr(value: Array<number>, index: number): Lexer.Token;
export declare function inscopeVariableExpr(value: Array<number>, index: number): Lexer.Token;
export declare function implicitVariableExpr(value: Array<number>, index: number): Lexer.Token;
export declare function lambdaVariableExpr(value: Array<number>, index: number): Lexer.Token;
export declare function lambdaPredicateExpr(value: Array<number>, index: number): Lexer.Token;
export declare function anyExpr(value: Array<number>, index: number): Lexer.Token;
export declare function allExpr(value: Array<number>, index: number): Lexer.Token;
export declare function collectionNavigationExpr(value: Array<number>, index: number): Lexer.Token;
export declare function keyPredicate(value: Array<number>, index: number): Lexer.Token;
export declare function simpleKey(value: Array<number>, index: number): Lexer.Token;
export declare function compoundKey(value: Array<number>, index: number): Lexer.Token;
export declare function keyValuePair(value: Array<number>, index: number): Lexer.Token;
export declare function keyPropertyValue(value: Array<number>, index: number): Lexer.Token;
export declare function keyPropertyAlias(value: Array<number>, index: number): Lexer.Token;
export declare function singleNavigationExpr(value: Array<number>, index: number): Lexer.Token;
export declare function collectionPathExpr(value: Array<number>, index: number): Lexer.Token;
export declare function complexPathExpr(value: Array<number>, index: number): Lexer.Token;
export declare function singlePathExpr(value: Array<number>, index: number): Lexer.Token;
export declare function functionExpr(value: Array<number>, index: number): Lexer.Token;
export declare function boundFunctionExpr(value: Array<number>, index: number): Lexer.Token;
export declare function functionExprParameters(value: Array<number>, index: number): Lexer.Token;
export declare function functionExprParameter(value: Array<number>, index: number): Lexer.Token;
export declare function parameterName(value: Array<number>, index: number): Lexer.Token;
export declare function parameterAlias(value: Array<number>, index: number): Lexer.Token;
export declare function parameterValue(value: Array<number>, index: number): Lexer.Token;
export declare function countExpr(value: Array<number>, index: number): Lexer.Token;
export declare function refExpr(value: Array<number>, index: number): Lexer.Token;
export declare function valueExpr(value: Array<number>, index: number): Lexer.Token;
export declare function rootExpr(value: Array<number>, index: number): Lexer.Token;
