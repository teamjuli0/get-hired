## Installing Postgresql in Manjaro with Oh-My-Zsh

Step 1)

```zsh
sudo pacman -S postgresql
```

Step 2)

```zsh
sudo su - postgres
```

Step 3)

```zsh
exit
```

Step 4)

```zsh
sudo systemctl start postgresql && sudo systemctl enable postgresql
```

Step 5)

```zsh
echo "alias psql=\"sudo -u postgres psql postgres\"" >> ~/.zshrc && source ~/.zshrc
```
