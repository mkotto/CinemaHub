﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Entities
{
    public interface IRepository
    {
        List<Genre> GetAllGenres();
        Genre GetById(int id);
    }
}
