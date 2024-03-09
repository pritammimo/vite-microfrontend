import {
    QueryClient,
    QueryClientProvider,
    useMutation,
    useQuery,
  } from '@tanstack/react-query';
  import React from 'react';
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });
  // const context = React.createContext<QueryClient | undefined>(queryClient);
  
  // //@ts-ignore
  // window.REACT_QUERY_CLIENT = queryClient;
  
  // //@ts-ignore
  // window.REACT_QUERY_CONTEXT = context;
  
  // queryClient.setMutationDefaults(['addProduct'], {
  //   mutationFn: (product: unknown) => {
  //     return Promise.resolve([product]);
  //   },
  // });
  
  // export const useCartQuery = () => {
  //   return useQuery(['products'], {
  //     queryFn: (product: unknown) => {
  //       return Promise.resolve([]);
  //     },
  //     context,
  //   });
  // };
  
  // export const useProducts = () => {
  //   return useMutation({
  //     mutationFn: (product: unknown) => Promise.resolve(product),
  //     onSuccess: (data: unknown) => {
  //       queryClient.setQueryData(['products'], [data]);
  //     },
  //     mutationKey: ['addProduct'],
  //     context,
  //   });
  // };
  
  export const QueryProvider = ({
    children,
  }) => {
    return (
      <QueryClientProvider client={queryClient} >
        {children}
      </QueryClientProvider>
    );
  };
  export {useQuery,useMutation}