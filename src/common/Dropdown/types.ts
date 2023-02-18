export type MaxHeightProps =
  | {
      hasMaxHeight?: false;
      maxHeight?: never;
    }
  | {
      hasMaxHeight: true;
      maxHeight?: string;
    };

export type Item = {
  title: string;
  id: string;
};
