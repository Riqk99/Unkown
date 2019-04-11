class Party
{
    constructor(Name, Player)
    {
        this.Name = Name;
        this.Player = Player;
        this.level = 0;
    }

    load()
    {
        return this;
    }

    save(Player, level)
    {
        this.Player = Player;
        this.level = level;
    }

    delete()
    {
        delete this;
    }
}

