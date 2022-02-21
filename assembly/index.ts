// @nearfile
import { context, storage, logging } from "near-sdk-as";
import { PersistentMap } from 'near-sdk-as';
import { ContractPromise } from 'near-sdk-as';
// import { keys } from 'ts-transformer-keys';
// implementation based on NEP-171
// https://nomicon.io/Standards/NonFungibleToken/Core.html


// --- contract code goes below

// It's good to use common constant, but not required.
import { LAST_SENDER_KEY } from "./model"

interface AddItemArgs {
  accountId: string;
  itemId: string;
}


// type AddItemArgs = {
//   accountId: string,
//   itemId: string,
// };

// This is our change method. It modifies the state of the contract by
// storing the account_id of the sender under the key "last_sender" on the blockchain
// export function sayHi1(): void {
//   // context.sender is the account_id of the user who sent this call to the contract
//   // It's provided by the Blockchain runtime. For now we just store it in a local variable.
//   const sender = context.sender;
//   // `near` class contains some helper functions, e.g. logging.
//   // Logs are not persistently stored on the blockchain, but produced by the blockchain runtime.
//   // It's helpful to use logs for debugging your functions or when you need to get some info
//   // from the change methods (since change methods don't return values to the front-end).
//   logging.log(sender + " says \"Hi!\"");
//   // storage is a helper class that allows contracts to modify the persistent state
//   // and read from it. setString allows you to persitently store a string value for a given string key.
//   // We'll store the last sender of this contract who called this method.
//   storage.setString(LAST_SENDER_KEY, sender);
// }

// This is our view method. It returns the last account_id of a sender who called `sayHi`.
// It reads value from the persistent store under the key "last_sender" and returns it.
// | string | null
// export function whoSaidHi(): string | null {
  export function nft_metadata(): NFTContractMetadata {
      return new NFTContractMetadata();
  }

export function whoSaidHi(): Array<Token> {
  // let a = new NFTContractMetadata();
  // logging.log(a.spec + " says \"Hi!\"");
  // return a;
  // let strng_meta = nftcontract_meta.get("dev-1645411440020-84028642468373");
  logging.log("before querying");
  let strng_meta = nftcontract_meta.getSome("dev-1645411440020-84028642468373");
  logging.log(strng_meta.icon + " says \"Buyi!\"");
  // let receiveId = "jsikka3.testnet";
  let receiveId = "jsikka33";
  const tokenIds: string[] = tokens_per_owner.getSome(receiveId);

    const tokens_out: Array<Token> = new Array<Token>();
    for (let i = 0; i < tokenIds.length; ++i) {
      const token: Token = tokens_by_id.getSome(tokenIds[i]);
      tokens_out.push(token);
    }
    // logging.log(tokens_out[0].id + " says \"Bye!\"");
    logging.log(tokens_out[0].metadata.title + " says \"Byeee!\"");

    return tokens_out;
  // return new NFTContractMetadata();
  // getString returns a string value for a given string key.
  // return storage.getString(LAST_SENDER_KEY);
  // const metadata = new NFTContractMetadata();
  // constructor(token_id: string, metadata: TokenMetadata, receiver_id: string) {
  //   this.id = token_id;
  //   this.metadata = metadata;
  //   this.owner_id = receiver_id;
  // }
  //   // const nft_meta = new NFTContractMetadata();
  //   return new(
  //     "jsikka3",
  //     metadata
  //    );
  // let a = new NFTContractMetadata();
  // logging.log(a.spec + " says \"Hi!\"");
  // return a;
  // return storage.getString(LAST_SENDER_KEY);
}
// import { Token, TokenMetadata } from './reit-token';

@nearBindgen
class NFTContractMetadata {
  // spec: string; // required, essentially a version like "nft-1.0.0"
  // name: string; // required, ex. "Mochi Rising — Digital Edition" or "Metaverse 3"
  // symbol: string; // required, ex. "MOCHI"
  // icon: string | null; // Data URL
  // base_uri: string | null; // Centralized gateway known to have reliable access to decentralized storage assets referenced by `reference` or `media` URLs
  // reference: string | null; // URL to a JSON file with more info
  // reference_hash: string | null; // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  constructor(
    public spec: string = 'reit-token-0.0.0', // required, essentially a version like "nft-1.0.0"
    public name: string = 'Reit Token', // required, ex. "Mochi Rising — Digital Edition" or "Metaverse 3"
    public symbol: string = 'REIT', // required, ex. "MOCHI"
    // public icon: string = '', // Data URL

    public icon: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 288 288'%3E%3Cg id='l' data-name='l'%3E%3Cpath d='M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z'/%3E%3C/g%3E%3C/svg%3E",
    // public icon: string = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 288 288'%3E%3Cg id='l' data-name='l'%3E%3Cpath d='M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z'/%3E%3C/g%3E%3C/svg%3E";
    public base_uri: string = '', // Centralized gateway known to have reliable access to decentralized storage assets referenced by `reference` or `media` URLs
    public reference: string = '', // URL to a JSON file with more info
    public reference_hash: string = '' // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  ) {}
}

@nearBindgen
class TokenMetadata {
  title: string; // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
  description: string; // free-form description
  media: string; // URL to associated media, preferably to decentralized, content-addressed storage
  media_hash: string; // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
  copies: number; // number of copies of this set of metadata in existence when token was minted.
  issued_at: number; // When token was issued or minted, Unix epoch in milliseconds
  expires_at: number; // When token expires, Unix epoch in milliseconds
  starts_at: number; // When token starts being valid, Unix epoch in milliseconds
  updated_at: number; // When token was last updated, Unix epoch in milliseconds
  extra: string; // anything extra the NFT wants to store on-chain. Can be stringified JSON.
  reference: string; // URL to an off-chain JSON file with more info.
  reference_hash: string; // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
}

const nftcontract_meta: PersistentMap<string, NFTContractMetadata> = new PersistentMap<string, NFTContractMetadata>(
  'nftcontract_meta'
);

const tokens_per_owner: PersistentMap<string, Array<string>> = new PersistentMap<
    string,
    Array<string>
  >('tokens_pr_owner1');

  //keeps track of the token struct for a given token ID
  const tokens_by_id: PersistentMap<string, Token> = new PersistentMap<string, Token>(
    'tokens_by_id'
  );

  const token_metadata_by_id: PersistentMap<string, TokenMetadata> =
    new PersistentMap<string, TokenMetadata>('token_metadata_by_id');

export function sayHi(): void {
  // context.sender is the account_id of the user who sent this call to the contract
  // It's provided by the Blockchain runtime. For now we just store it in a local variable.
  const sender = context.sender;
  // `near` class contains some helper functions, e.g. logging.
  // Logs are not persistently stored on the blockchain, but produced by the blockchain runtime.
  // It's helpful to use logs for debugging your functions or when you need to get some info
  // from the change methods (since change methods don't return values to the front-end).
  // logging.log(sender + " says \"Hi!\"");
  // storage is a helper class that allows contracts to modify the persistent state
  // and read from it. setString allows you to persitently store a string value for a given string key.
  // We'll store the last sender of this contract who called this method.
  // storage.setString(LAST_SENDER_KEY, sender);

  const tokenMetadata1: TokenMetadata = {
    // spec: 'reit-token-0.0.0',
    // name: 'Reit Token',
    // symbol: 'REIT',
    // icon: null,
    // base_uri: null,
    // reference: null,
    // reference_hash: null,
    title: "Inferno-Skin2s", // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
    description: "We have skins.", // free-form description
    // media: "https://imgprd19.hobbylobby.com/8/be/65/8be651bcf77d07df734e17c65dd81c5e01e91472/350Wx350H-789305-0619.jpg", // URL to associated media, preferably to decentralized, content-addressed storage
    media: "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/",
    media_hash: "", // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
    copies: 1, // number of copies of this set of metadata in existence when token was minted.
    issued_at: 1645419982, // When token was issued or minted, Unix epoch in milliseconds
    expires_at: 1645429982, // When token expires, Unix epoch in milliseconds
    starts_at: 1645419982, // When token starts being valid, Unix epoch in milliseconds
    updated_at: 1645419982, // When token was last updated, Unix epoch in milliseconds
    extra: "", // anything extra the NFT wants to store on-chain. Can be stringified JSON.
    reference: "", // URL to an off-chain JSON file with more info.
    reference_hash: "", // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  };
  let tokenId = "frsttok";
  // let receiveId = "jsikka3.testnet";
  let receiveId = "jsikka33";

  logging.log(sender + " says \"Bye!\"");

  // const tokens_per_owner: PersistentMap<string, Array<string>> = new PersistentMap<
  //   string,
  //   Array<string>
  // >('tokens_pr_owner');

  // //keeps track of the token struct for a given token ID
  // const tokens_by_id: PersistentMap<string, Token> = new PersistentMap<string, Token>(
  //   'tokens_by_id'
  // );

  // const token_metadata_by_id: PersistentMap<string, TokenMetadata> =
  //   new PersistentMap<string, TokenMetadata>('token_metadata_by_id');

    // console.log("please come");
    logging.log("before setting");
    nftcontract_meta.set("dev-1645411440020-84028642468373", new NFTContractMetadata());
    logging.log("after setting");
    const token = new Token(tokenId, tokenMetadata1, receiveId);
    const tokens: Array<string> = new Array<string>();
    logging.log(token.metadata.title + " says \"Bye!\"");
    tokens.push(tokenId);
    tokens_per_owner.set(receiveId, tokens);
    tokens_by_id.set(tokenId, token);
    token_metadata_by_id.set(tokenId, token.metadata);
    logging.log(sender + " says \"Byee!\"");

    // const tokenIds: string[] = tokens_per_owner.getSome(receiveId);

    // const tokens_out: Array<Token> = new Array<Token>();
    // for (let i = 0; i < tokenIds.length; ++i) {
    //   const token: Token = tokens_by_id.getSome(tokenIds[i]);
    //   tokens_out.push(token);
    // }
    // logging.log(tokens_out[0].id + " says \"Bye!\"");

    // return tokens_out;
}

@nearBindgen
class Token {
  id: string;
  owner_id: string;
  metadata: TokenMetadata;
  constructor(token_id: string, metadata: TokenMetadata, receiver_id: string) {
    this.id = token_id;
    this.metadata = metadata;
    this.owner_id = receiver_id;
  }
}

@nearBindgen
export class ReitToken {
  token: Token;

  constructor(token_id: string, metadata: TokenMetadata, receiver_id: string) {
    // this.token = { id: token_id, metadata: metadata, owner_id: receiver_id };
    this.token = new Token(token_id, metadata, receiver_id);
  }
  // --- view methods --- //

  nft_token(): Token {
    return this.token;
  }

  // --- change methods --- //

  nft_transfer(
    receiver_id: string,
    token_id: string,
    approval_id: number,
    memo: string
  ): void {
    // assert(false, 'nft_transfer not implemented');
  }

  // nft_transfer_call(
  //   receiver_id: string,
  //   token_id: string,
  //   approval_id: number,
  //   memo: string,
  //   msg: string
  // ): ContractPromise {
  //   // assert(false, 'nft_transfer_call not implemented');
  //   // var emptyStr:string = '';
  //   // var emptyJson: = {};
  //   // return ContractPromise.create("", "", {}, 1);
    
  //   // keyof AddItemArgs;
  //   // console.log(AddItemArgs);

  //   // const itemArgs: AddItemArgs = {
  //   //        accountId: "",
  //   //        itemId: "",
  //   //   };
  //   const itemArgs = {
  //     accountId: "",
  //     itemId: ""
  //   }
  //   const abc = "";
  //   const bcd = 1;
  //   // const itemArgs: object = {};
  //   // const itemArgs = {};
  //   return ContractPromise.create(abc, abc, itemArgs, bcd);
  // }
}

@nearBindgen
class Contract {
  //keeps track of the metadata for the contract
  // metadata: NFTContractMetadata = {
  //   spec: 'reit-token-0.0.0',
  //   name: 'Reit Token',
  //   symbol: 'REIT',
  //   icon: null,
  //   base_uri: null,
  //   reference: null,
  //   reference_hash: null,
  // };

  // tokenMetadata: TokenMetadata = {
  //   // spec: 'reit-token-0.0.0',
  //   // name: 'Reit Token',
  //   // symbol: 'REIT',
  //   // icon: null,
  //   // base_uri: null,
  //   // reference: null,
  //   // reference_hash: null,
  //   title: "Inferno-Skins", // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
  //   description: "We have skins.", // free-form description
  //   media: "https://imgprd19.hobbylobby.com/8/be/65/8be651bcf77d07df734e17c65dd81c5e01e91472/350Wx350H-789305-0619.jpg", // URL to associated media, preferably to decentralized, content-addressed storage
  //   media_hash: "", // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
  //   copies: 1, // number of copies of this set of metadata in existence when token was minted.
  //   issued_at: 1645419982, // When token was issued or minted, Unix epoch in milliseconds
  //   expires_at: 1645429982, // When token expires, Unix epoch in milliseconds
  //   starts_at: 1645419982, // When token starts being valid, Unix epoch in milliseconds
  //   updated_at: 1645419982, // When token was last updated, Unix epoch in milliseconds
  //   extra: "", // anything extra the NFT wants to store on-chain. Can be stringified JSON.
  //   reference: "", // URL to an off-chain JSON file with more info.
  //   reference_hash: "", // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  // };

  // nft_tokenmeta(): TokenMetadata {
  //   // console.log("---");
  //   return new TokenMetadata();
  // }

  // nft_metadata1(): NFTContractMetadata {
  //   return new NFTContractMetadata();
  // }
  // nft_metadata(owner_id: string) {
  //   // const metadata = new NFTContractMetadata();
  //   // // const nft_meta = new NFTContractMetadata();
  //   // return new(
  //   //   owner_id,
  //   //   metadata
  //   //  );
  // }
  // nft_metadata(): NFTContractMetadata {
  //   let a = new NFTContractMetadata();
  //   logging.log(a.spec + " says \"Hi!\"");
  //   return a;
  // }
  //contract owner - @jsikka
  // owner_id: string; // Not sure if this is relevant for the contract itself

  // new NFTContractMetadata();
  //keeps track of all the token IDs for a given account
  // tokens_per_owner: PersistentMap<string, Array<string>> = new PersistentMap<
  //   string,
  //   Array<string>
  // >('tokens_pr_owner');

  // //keeps track of the token struct for a given token ID
  // tokens_by_id: PersistentMap<string, Token> = new PersistentMap<string, Token>(
  //   'tokens_by_id'
  // );

  // //keeps track of the token metadata for a given token ID
  // token_metadata_by_id: PersistentMap<string, TokenMetadata> =
  //   new PersistentMap<string, TokenMetadata>('token_metadata_by_id');

  // nft_tokens_for_owner(account_id: string): Array<Token> {
  //   const tokenIds: string[] = this.tokens_per_owner.getSome(account_id);

  //   const tokens: Array<Token> = new Array<Token>();
  //   for (let i = 0; i < tokenIds.length; ++i) {
  //     const token: Token = this.tokens_by_id.getSome(tokenIds[i]);
  //     tokens.push(token);
  //   }
  //   return tokens;
  // }

  // nft_mint(
  //   token_id: string,
  //   metadata: TokenMetadata,
  //   receiver_id: string
  // ): void {
  //   // assert(
  //   //   this.tokens_by_id.contains(token_id),
  //   //   'ID is already taken, create new ID'
  //   // );
  //   // console.log("please come");
  //   const token = new Token(token_id, metadata, receiver_id);
  //   const tokens: Array<string> = new Array<string>();
  //   tokens.push(token_id);
  //   this.tokens_per_owner.set(receiver_id, tokens);
  //   this.tokens_by_id.set(token_id, token);
  //   this.token_metadata_by_id.set(token_id, token.metadata);
  // }
}