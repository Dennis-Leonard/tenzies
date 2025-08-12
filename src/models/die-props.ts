export interface DieProps {
  die: {
    value: number;
    isHeld: boolean;
    id: string;
  };
  holdDie: (holdId: string) => void;
}
