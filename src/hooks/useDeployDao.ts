import {
  Address,
  Cell,
  toNano,
  OpenedContract,
  Dictionary,
  DictionaryValue,
} from "ton-core";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Dao } from "../contracts/dao";

const ListValue: DictionaryValue<string> = {
  serialize(src: string, builder) {
    builder.storeStringRefTail(src);
  },
  parse(src) {
    return src.loadStringRefTail();
  },
};

export function useDeployDao() {}
