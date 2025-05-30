import logo from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { useState } from 'react';
import Modal from 'react-modal';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Container>
        <Content>
            <img src={logo} alt="PBMoney" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
            </button>
        </Content>

    </Container>
  );
}