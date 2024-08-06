# Habilitar Execucao De Scripts Power Shell No Windows 10
1. No menu, digitar "windows powershell" e executar como administrator;
2. Ver a política de execução de scripts com o comando ```get-executionpolicy```. O resultado será ```Restricted```;
3. Altere a política com o comando ```set-executionpolicy Unrestricted```;
4. Confirme que de fato quer que a alteração seja aplicada com ```sim```;
5. Digite ```get-executionpolicy``` novamente e verifique que a política foi alterada.
