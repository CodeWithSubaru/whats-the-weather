import styled from "styled-components";

export const Card = styled.div`
  background: var(--card-background);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  row-gap: 10px;
`;

export const CardTitle = styled.h1`
  color: white;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: light;
`;

export const CardImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const Image = styled(CardImage)`
  width: 200px;
  height: 200px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

// custom
export const CardTemperature = styled.p`
  font-size: 3.75rem; /* 60px */
  line-height: 1;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props: any) => props.justify};
  align-items: ${(props: any) => props.items};
  flex-direction: ${({ direction }: any) => direction};
  gap: ${({ gap }: any) => gap};
  row-gap: ${({ rowGap }: any) => rowGap};
  column-gap: ${({ colGap }: any) => colGap};
`;
