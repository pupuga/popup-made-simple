import React, { createContext } from 'react';

export const BlockContext: React.Context<string> = createContext('block');
export const DataContext: React.Context<string> = createContext('data');
export const InputContext: React.Context<string> = createContext('input');