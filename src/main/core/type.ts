
export type ConditionField =
  | "filename"
  | "extension"
  | "size"
  | "age";

export type ConditionOperator =
  | "contains"
  | "equals"
  | "endsWith"
  | "greaterThan"
  | "lessThan";

export type ActionType =
  | "move"
  | "rename"
  | "copy"
  | "trash";

export interface Condition {
  field: ConditionField;
  operator: ConditionOperator;
  value: string | number;
}

export interface Rule {
  id: string;
  name: string;
  enabled: boolean;
  priority: number;
  conditions: Condition[];
  action: ActionType;
  destination?: string;
  newName?: string;
}

export interface FileInfo {
  path: string;
  filename: string;
  extension: string;
  sizeBytes: number;
  modifiedAt: number;
}

export interface ActionPlan {
  sourcePath: string;
  action: ActionType;
  destinationPath?: string;
  newName?: string;
  matchedRuleId: string;
}

export interface ActionResult {
  success: boolean;
  message: string;
  resultingPath?: string;
}
