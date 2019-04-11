class Party
{
    constructor(Name, Player)
    {
        this.Name = Name;
        this.Player = Player;
        this.level = 1;
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

    get getLevel()
    {
        return this.level;
    }

    get getPlayer()
    {
        return this.Player;
    }

    get getName()
    {
        return this.Name;
    }
}

